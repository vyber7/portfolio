import type { Page, Route } from "@playwright/test";
import { test, expect } from "./fixtures";

const emailEndpoint = "https://api.emailjs.com/api/v1.0/email/send-form";
const details = { name: "Test Visitor", email: "visitor@example.com", message: "A portfolio test message." };

async function fillForm(page: Page) {
  await page.getByLabel("Name", { exact: true }).fill(details.name);
  await page.getByLabel("Email", { exact: true }).fill(details.email);
  await page.getByLabel("What are you building?").fill(details.message);
}

test.beforeEach(async ({ page }) => {
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Send message" }).scrollIntoViewIfNeeded();
  // client:visible hydrates asynchronously; interact only after React is ready.
  await expect(page.locator("astro-island[component-export='default']")).not.toHaveAttribute("ssr");
});

for (const invalid of [
  { label: "Name", value: "", reason: "valueMissing" },
  { label: "Email", value: "", reason: "valueMissing" },
  { label: "What are you building?", value: "", reason: "valueMissing" },
  { label: "Email", value: "invalid-email", reason: "typeMismatch" },
] as const) {
  test(`rejects ${invalid.label}: ${invalid.reason}`, async ({ page }) => {
    const requests: string[] = [];
    await page.route(emailEndpoint, async (route) => {
      requests.push(route.request().url());
      await route.fulfill({ status: 200, body: "OK" });
    });
    await fillForm(page);
    const field = page.getByLabel(invalid.label, { exact: true });
    await field.fill(invalid.value);
    await page.getByRole("button", { name: "Send message" }).click();
    expect(await field.evaluate((element, reason) =>
      (element as HTMLInputElement | HTMLTextAreaElement).validity[reason], invalid.reason)).toBe(true);
    await expect(field).toBeFocused();
    await expect(page.getByRole("button", { name: "Send message" })).toBeEnabled();
    expect(requests).toHaveLength(0);
  });
}

test("sends entered details once, then shows success and clears the form", async ({ page }) => {
  const requests: Route[] = [];
  // Hold the response so the sending state can be tested without a timing delay.
  await page.route(emailEndpoint, (route) => { requests.push(route); });
  await fillForm(page);
  await page.getByRole("button", { name: "Send message" }).click();
  const sending = page.getByRole("button", { name: "Sending…" });
  await expect(sending).toBeDisabled();
  await expect(page.locator("[aria-live='polite']")).toHaveText("Sending…");
  await expect.poll(() => requests.length).toBe(1);
  const request = requests[0].request();
  expect(request.method()).toBe("POST");
  for (const [name, value] of Object.entries(details)) {
    expect(request.postData()).toContain(`name="${name}"\r\n\r\n${value}`);
  }
  // A second native submit event must also be ignored while a request is pending.
  await page.locator("form").evaluate((form) => (form as HTMLFormElement).requestSubmit());
  await requests[0].fulfill({ status: 200, contentType: "text/plain", body: "OK" });
  await expect(page.locator("[aria-live='polite']")).toContainText("Message sent.");
  await expect(page.getByRole("button", { name: "Send message" })).toBeEnabled();
  for (const label of ["Name", "Email", "What are you building?"]) {
    await expect(page.getByLabel(label, { exact: true })).toHaveValue("");
  }
  expect(requests).toHaveLength(1);
});

test("keeps entered details on failure and allows a successful retry", async ({ page }) => {
  let attempts = 0;
  await page.route(emailEndpoint, async (route) => {
    attempts += 1;
    await route.fulfill({ status: attempts === 1 ? 500 : 200, body: attempts === 1 ? "Unavailable" : "OK" });
  });
  await fillForm(page);
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.locator("[aria-live='polite']")).toContainText("That didn’t send.");
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue(details.name);
  await expect(page.getByLabel("Email", { exact: true })).toHaveValue(details.email);
  await expect(page.getByLabel("What are you building?")).toHaveValue(details.message);
  await page.getByRole("button", { name: "Send message" }).click();
  await expect(page.locator("[aria-live='polite']")).toContainText("Message sent.");
  expect(attempts).toBe(2);
});
