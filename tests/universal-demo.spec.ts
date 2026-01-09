import { test } from '@playwright/test';
import { BasePage } from '../src/pages/BasePage';
import { testData } from '../src/data/testData';

/**
 * Infrastructure Test: Cross-Domain Connectivity.
 * Validates the core framework's ability to interface with external resources 
 * and perform high-level state assertions using base components.
 */
test('Universal Title Check', async ({ page }) => {
  /**
   * Component Orchestration.
   * Direct instantiation of BasePage to leverage common interaction logic 
   * without the overhead of domain-specific Page Objects.
   */
  const basePage = new BasePage(page);

  /**
   * Action: External Resource Access.
   * Verifying the framework's capability to resolve and navigate to 
   * third-party entry points defined in the global registry.
   */
  await basePage.navigateTo(testData.urls.google);

  /**
   * Validation: Metadata Integrity.
   * Confirms that the page context correctly resolves titles.
   * This serves as a smoke test for the 'verifyTitle' utility method.
   */
  await basePage.verifyTitle('Google');
});
