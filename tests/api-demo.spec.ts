import { test, expect } from '@playwright/test';

/**
 * Service Layer Integration Test.
 * Validates the User Management API contract using Playwright's native request context.
 * In a hybrid flow, this ensures the backend state matches the UI representation.
 */
test('Hybrid Check - API User Validation', async ({ request }) => {
  // Using a stable mock API to demonstrate contract validation logic
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  
  // Diagnostic logging for CI/CD traceability
  console.log(`[Network Diagnostics] API Status Received: ${response.status()}`);
  
  /**
   * Assertion Phase 1: Transport Layer Verification.
   * Ensuring the service is reachable and returns a standard success code.
   */
  expect(response.status()).toBe(200);

  /**
   * Assertion Phase 2: Data Integrity & Schema Validation.
   * Extracting the payload to verify business-critical fields.
   */
  const body = await response.json();
  
  // Verifying identity consistency: In this dataset, ID #1 is strictly mapped to 'Leanne Graham'
  expect(body.name).toBe('Leanne Graham');
  
  /**
   * Performance & Traceability Note: 
   * Direct API checks are significantly faster than UI steps and 
   * should be used to verify the "Source of Truth" in the database.
   */
  console.log('--- ✅ Integration Check Passed: Backend Data Integrity Verified ---');
});
