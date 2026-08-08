import { test as base, expect } from '@playwright/test';
import { RoomApiClient } from '../api/RoomApiClient';
import { UserApiClient } from '../api/UserApiClient';
import { LoginPage } from '../pages/LoginPage';
import { RoomsPage } from '../pages/RoomsPage';

type TestFixtures = {
  loginPage: LoginPage;
  roomsPage: RoomsPage;
  userApi: UserApiClient;
  roomApi: RoomApiClient;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  roomsPage: async ({ page }, use) => {
    await use(new RoomsPage(page));
  },

  userApi: async ({ request }, use) => {
    await use(new UserApiClient(request));
  },

  roomApi: async ({ request }, use) => {
    await use(new RoomApiClient(request));
  },
});

export { expect };
