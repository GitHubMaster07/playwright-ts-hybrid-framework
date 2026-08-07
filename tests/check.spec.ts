import { test, expect } from '@playwright/test';

/**
 * Global Sanity Check.
 * A lightweight test designed to verify that the core infrastructure (Network, DNS, SSL)
 * is operational before executing more resource-intensive suites.
 * Acts as a "Heartbeat" for the target environment.
 */
test('simple sanity check', async ({ page }) => {
  /**
   * Browser Context Initialization.
   * Navigating to the entry point. Playwright automatically waits for the 'load'
   * event by default, ensuring the page is ready for interaction.
   */
  await page.goto('https://example.com');

  /**
   * Web-First Assertion.
   * Testing the page state using an auto-retrying matcher.
   * If the title isn't immediately available (e.g., slow SPA load),
   * Playwright will poll the DOM until the condition is met or the timeout expires.
   */
  await expect(page).toHaveTitle(/Example/);
});
