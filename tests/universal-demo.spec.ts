import { test } from '@playwright/test';
import { BasePage } from '../src/pages/BasePage';
import { testData } from '../src/data/testData';

test('Universal Title Check', async ({ page }) => {
  // 1. Initialize the BasePage with the current browser page
  const basePage = new BasePage(page);

  // 2. Use our universal navigation method and data
  await basePage.navigateTo(testData.urls.google);

  // 3. Verify the title is correct
  // Note: Google's title is usually just "Google"
  await basePage.verifyTitle('Google');
});