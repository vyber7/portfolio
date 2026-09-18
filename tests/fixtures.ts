import { test as base, expect } from "@playwright/test";

export const test = base.extend({
  page: async ({ page, baseURL }, use) => {
    // Fail closed: no test may send real email or contact another external service.
    // Tests can register a more specific route afterward to return a mock response.
    await page.route("**/*", (route) =>
      new URL(route.request().url()).origin === new URL(baseURL!).origin
        ? route.continue()
        : route.abort(),
    );
    await use(page);
  },
});

export { expect };
