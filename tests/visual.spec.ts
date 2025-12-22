import { test, expect } from '@playwright/test';

test('Visual Regression - Login Page Snapshot', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // We intentionally change the page state by typing
  await page.locator('[data-test="username"]');

  // NOW we ask Playwright to compare it to the original 'Golden Image'
  await expect(page).toHaveScreenshot('login-page.png');
});