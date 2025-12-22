import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { testData } from '../src/data/testData';

test('Login with valid credentials @smoke', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Use '/' to navigate to the BASE_URL from your .env
    await loginPage.navigateTo('/'); 
    
    await loginPage.login(testData.credentials.standardUser, testData.credentials.password);

    // Verify redirect
    await expect(page).toHaveURL(/.*inventory.html/);
});
