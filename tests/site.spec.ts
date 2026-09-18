import { test, expect } from "./fixtures";

for (const path of ["/", "/projects/bidlane/"]) {
  test(`${path} loads with images and fits the viewport`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      expect(await image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);
    expect(errors).toEqual([]);
  });
}

test("case study and available primary navigation reach their destinations", async ({ page, isMobile }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Read the BidLane case study" }).click();
  await expect(page).toHaveURL(/\/projects\/bidlane\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("BidLane");
  await page.getByRole("link", { name: "All work" }).click();
  await expect(page).toHaveURL(/\/#work$/);
  const navigation = page.getByRole("navigation", { name: "Primary navigation", includeHidden: true });
  if (isMobile) {
    // The current mobile design hides the header navigation.
    await expect(navigation).toBeHidden();
    await page.getByRole("link", { name: "Vitaliy Bernatskyy, home" }).click();
    await expect(page).toHaveURL(/\/$/);
    await page.getByRole("link", { name: "Explore selected work" }).click();
    await expect(page).toHaveURL(/\/#work$/);
    await expect(page.locator("#work")).toBeInViewport();
    return;
  }
  for (const section of ["About", "Contact", "Work"]) {
    await navigation.getByRole("link", { name: section, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/#${section.toLowerCase()}$`));
    await expect(page.locator(`#${section.toLowerCase()}`)).toBeInViewport();
  }
});
