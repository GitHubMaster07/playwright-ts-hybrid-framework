import { Page, expect } from '@playwright/test';

export class BasePage {
  // We use 'readonly' so the page instance cannot be changed accidentally
  constructor(protected readonly page: Page) {}

  // A universal method to go to any URL
  async navigateTo(path: string) {
    await this.page.goto(path);
  }

  // A universal method to click any element
  async clickElement(selector: string) {
    await this.page.click(selector);
  }

  // A universal method to verify the page title
  async verifyTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }
}