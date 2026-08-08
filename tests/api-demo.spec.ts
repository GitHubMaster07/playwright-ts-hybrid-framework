import { expect, test } from '@playwright/test';
import { UserApiClient } from '../src/api/UserApiClient';

test('should retrieve user details from the Users API', async ({ request }) => {
  const userApi = new UserApiClient(request);

  const response = await userApi.getUser(1);

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const user = await userApi.getUserData(1);

  expect(user.id).toBe(1);
  expect(user.name).toBe('Leanne Graham');
  expect(user.username).toBe('Bret');
  expect(user.email).toBe('Sincere@april.biz');
});
