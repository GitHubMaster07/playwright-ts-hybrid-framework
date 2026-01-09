import { Page, expect } from '@playwright/test';

/**
 * Core Abstract Page Representation.
 * Serves as the base foundation for all Page Object Models (POM).
 * Encapsulates common browser interactions and provides a consistent interface 
 * for derived page classes.
 */
export class BasePage {
    /**
     * The Playwright Page instance is marked as 'readonly' to ensure 
     * structural integrity of the session throughout the object's lifecycle.
     * 'protected' access allows extended Page Objects to utilize the driver directly.
     */
    constructor(protected readonly page: Page) {}

    /**
     * Navigation Orchestrator.
     * Directs the browser context to a specific resource path.
     * Playwright internally handles the 'load' state, ensuring the action is synchronized.
     */
    async navigateTo(path: string) {
        await this.page.goto(path);
    }

    /**
     * Atomic Interaction: Click.
     * Leverages Playwright's 'Actionability' checks (visible, stable, enabled)
     * before performing the click, reducing test flakiness significantly.
     */
    async clickElement(selector: string) {
        await this.page.click(selector);
    }

    /**
     * State Assertion: Title Verification.
     * Utilizes web-first assertions which include built-in retry logic 
     * to account for asynchronous DOM updates.
     */
    async verifyTitle(title: string | RegExp) {
        await expect(this.page).toHaveTitle(title);
    }
}
