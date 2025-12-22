import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { testData } from '../src/data/testData';

test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo(testData.urls.sauceDemo);
    await loginPage.login(testData.credentials.standardUser, testData.credentials.password);

    // Verify we landed on the inventory page
    await expect(page).toHaveURL(/.*inventory.html/);
});
