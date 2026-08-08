import { expect, test } from '../src/fixtures/testFixtures';
import { testData } from '../src/data/testData';

test('should authenticate a standard user successfully @smoke', async ({ loginPage, page }) => {
  await loginPage.navigateTo('/');
  await loginPage.login(testData.users.standard);

  await expect(page).toHaveURL(/inventory\.html$/);
});
