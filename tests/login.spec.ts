import { expect, test } from '@playwright/test';
import { testData } from '../src/data/testData';
import { LoginPage } from '../src/pages/LoginPage';

test('should authenticate a standard user successfully @smoke', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateTo('/');
  await loginPage.login(testData.users.standard);

  await expect(page).toHaveURL(/inventory\.html$/);
});
