import { expect, test } from '@playwright/test';

type UserResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
};

test('should return the expected user contract from the API', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  expect(response.ok()).toBeTruthy();

  const user = (await response.json()) as UserResponse;

  expect(user).toMatchObject({
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  });
});