import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { testData } from '../src/data/testData';

/**
 * Suite: Authentication & Authorization.
 * Validates the primary user journey using the 'standard_user' profile.
 * Tagged as @smoke to be included in the gated CI/CD pipeline for fast regression.
 */
test('Login with valid credentials @smoke', async ({ page }) => {
    // Dependency Injection: Initializing the Page Object within the test context
    const loginPage = new LoginPage(page);
    
    /**
     * Action: Environment-agnostic navigation.
     * Path '/' resolves to 'baseURL' defined in playwright.config.ts or .env file,
     * ensuring the test suite remains portable across different environments.
     */
    await loginPage.navigateTo('/'); 
    
    /**
     * Action: Authentication flow.
     * Consuming strictly-typed test data to perform the business transaction.
     */
    await loginPage.login(testData.credentials.standardUser, testData.credentials.password);

    /**
     * Assertion: Route Authorization.
     * Verifying that the application state has successfully transitioned 
     * to the protected 'inventory' area post-authentication.
     */
    await expect(page).toHaveURL(/.*inventory.html/);
});
