import { Locator, Page } from '@playwright/test';
import { environment } from '../config/environment';
import { BasePage } from './BasePage';

export class RoomsPage extends BasePage {
  private readonly roomCards: Locator;
  private readonly roomTitles: Locator;

  constructor(page: Page) {
    super(page);

    this.roomCards = page.locator('.room-card');
    this.roomTitles = page.locator('.room-card .card-title');
  }

  async open(): Promise<void> {
    await this.page.goto(environment.roomsUiUrl);
    await this.roomCards.first().waitFor({ state: 'visible' });
  }

  async getRoomCount(): Promise<number> {
    return this.roomCards.count();
  }

  async getRoomTitles(): Promise<string[]> {
    return this.roomTitles.allInnerTexts();
  }
}
