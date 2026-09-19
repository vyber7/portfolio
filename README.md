# Vitaliy Bernatskyy — Web Development Services

A services-first personal site for local business websites, custom web apps, and ongoing maintenance, with selected work and a secondary path for employers. Built with Astro, React, and TypeScript. Most pages render as static HTML; React is reserved for the interactive contact form.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run check
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Tests

Install the Chromium browser once after installing dependencies:

```sh
npx playwright install chromium
```

Run the browser suite:

```sh
npm test
```

The suite builds the production site (including Astro's type checks), starts a
preview server on port 4322, and runs in Chromium at desktop and mobile widths.
It covers contact form validation, pending/success/error states and retries,
duplicate submission prevention, page navigation, images, and
horizontal overflow. External browser requests are blocked unless a test mocks
them; EmailJS never sends real email during these tests.

Use `npm run test:ui` for interactive debugging. Failed tests save screenshots and
traces in `test-results/`. On Linux CI, install browser system dependencies with
`npx playwright install --with-deps chromium` before running `npm test`.
If a browser download is unavailable, `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` can
point to an existing Chromium executable; the Playwright-managed browser is preferred.
