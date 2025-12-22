import { test, expect } from '@playwright/test';

test('Hybrid Check - API User Validation', async ({ request }) => {
  // Using JSONPlaceholder - an extremely stable API for testing
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  
  console.log(`API Status Received: ${response.status()}`);
  
  // Verify 200 OK
  expect(response.status()).toBe(200);

  const body = await response.json();
  
  // JSONPlaceholder User #1 is always 'Leanne Graham'
  expect(body.name).toBe('Leanne Graham');
  expect(body.email).toBe('Sincere@april.biz');
  
  console.log('API Response verified: User is Leanne Graham');
});