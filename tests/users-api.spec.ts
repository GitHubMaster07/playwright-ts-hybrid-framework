import { expect, test } from '../src/fixtures/testFixtures';

test('should retrieve user details from the Users API', async ({ userApi }) => {
  const { response, data: user } = await userApi.getUser(1);

  expect(response.status()).toBe(200);

  expect(user).toMatchObject({
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  });
});
