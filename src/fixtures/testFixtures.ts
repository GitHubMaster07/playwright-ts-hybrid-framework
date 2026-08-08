import { test as base, expect } from '@playwright/test';
import { UserApiClient } from '../api/UserApiClient';
import { LoginPage } from '../pages/LoginPage';

type TestFixtures = {
  loginPage: LoginPage;
  userApi: UserApiClient;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  userApi: async ({ request }, use) => {
    await use(new UserApiClient(request));
  },
});

export { expect };
