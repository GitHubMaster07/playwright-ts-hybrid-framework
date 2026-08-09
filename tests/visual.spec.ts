import { expect, test } from '../src/fixtures/testFixtures';

test('login page should match approved visual baseline', async ({ page, loginPage }) => {
  await loginPage.navigateTo('/');

  await expect(page).toHaveScreenshot('login-page.png');
});
