import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * Page Object Model for the Authentication Interface.
 * Specific to the SauceDemo login system, utilizing resilient data-test selectors 
 * to decouple test logic from UI styling changes.
 */
export class LoginPage extends BasePage {
    /**
     * Element Locators.
     * We use 'private readonly' and the 'Locator' type to ensure these elements 
     * are immutable and only accessible within this domain logic.
     */
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        // Invoking the BasePage constructor to establish the browser context
        super(page); 
        
        /**
         * Selecting elements by 'data-test' attributes.
         * This is the gold standard for automation, as these attributes are 
         * purpose-built for testing and less likely to change than IDs or CSS classes.
         */
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    /**
     * High-level Business Action: Login.
     * Combines multiple atomic interactions into a single reusable method.
     * Note: We leverage the pre-defined locators to maintain a 'Single Source of Truth' for selectors.
     */
    async login(user: string, pass: string) {
        // Perform sequential authentication steps
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}
