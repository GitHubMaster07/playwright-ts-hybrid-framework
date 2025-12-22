import { test, expect } from '@playwright/test';

test('Hybrid Check - API User Validation', async ({ request }) => {
  // JSONPlaceholder is specifically built for testing
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  
  console.log(`API Status Received: ${response.status()}`);
  
  // Verify 200 OK
  expect(response.status()).toBe(200);

  const body = await response.json();
  
  // User #1 is always Leanne Graham in this dataset
  expect(body.name).toBe('Leanne Graham');
  
  console.log('API Response verified: User is Leanne Graham');
});