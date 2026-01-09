import { test, expect } from '@playwright/test';

/**
 * Visual Regression Suite.
 * Validates the UI consistency by performing pixel-by-pixel comparison
 * against a baseline 'Golden Image'. This ensures that CSS changes or 
 * library updates haven't introduced unintended layout shifts.
 */
test('Visual Regression - Login Page Snapshot', async ({ page }) => {
  // Navigate to the target entry point for visual auditing
  await page.goto('https://www.saucedemo.com');

  /**
   * State Preparation.
   * Ensuring the element is present in the DOM before capturing the snapshot.
   * Playwright's locator here acts as a synchronization point.
   */
  await page.locator('[data-test="username"]').waitFor({ state: 'visible' });

  /**
   * Visual Assertion: Snapshot Comparison.
   * Compares the current viewport against 'login-page.png'.
   * The framework automatically handles the diffing process and generates 
   * a comparison report if the mismatch exceeds the threshold.
   */
  await expect(page).toHaveScreenshot('login-page.png', {
      // Configuration for masking or sensitivity can be added here
      maxDiffPixels: 100, // Optional: Tolerance for minor rendering variations
  });
});
