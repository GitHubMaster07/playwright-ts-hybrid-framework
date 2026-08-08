import { expect, test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

test('login page should match approved visual baseline', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo('/');

  await expect(page).toHaveScreenshot('login-page.png');
});
