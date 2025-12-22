import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    // We define the specific buttons/inputs for this page
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page); // This sends the 'page' up to the BasePage
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async login(user: string, pass: string) {
    // Fill the username field
    await this.page.locator('[data-test="username"]').fill(user);
    
    // Fill the password field
    await this.page.locator('[data-test="password"]').fill(pass);
    
    // Click the login button
    await this.page.locator('[data-test="login-button"]').click();
}
}