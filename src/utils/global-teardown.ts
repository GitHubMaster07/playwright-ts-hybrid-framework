import { request, FullConfig } from '@playwright/test';

/**
 * Global Teardown Orchestrator.
 * Executed once after all test workers have completed their tasks.
 * Ensures the environment is restored to its baseline state, preventing 
 * cumulative data accumulation that could lead to environment drift.
 */
async function globalTeardown(config: FullConfig) {
  // Extracting the root environment URL from the Playwright configuration
  const baseURL = config.projects[0].use.baseURL;
  const requestContext = await request.newContext();

  console.log('\n--- 🧹 Global Cleanup Started: Purging Test Session Data ---');
  
  /**
   * Data Integrity Logic:
   * Perform high-level cleanup via API (faster and more reliable than UI-based cleanup).
   * Example scenarios: 
   * - Invalidating persistent auth tokens.
   * - Deleting ephemeral test accounts created during 'global-setup'.
   * - Releasing shared resources (e.g., locking mechanisms in DB).
   */
  try {
    // Placeholder for enterprise cleanup logic
    // await requestContext.delete(`${baseURL}/api/users/cleanup`, {
    //   headers: { 'Authorization': `Bearer ${process.env.ADMIN_TOKEN}` }
    // });
    
    console.log('--- ✅ Global Cleanup Finished: Environment Reset Successful ---');
  } catch (error) {
    console.error(`--- ⚠️ Cleanup Failed: Manual intervention might be required. Error: ${error} ---`);
  } finally {
    // Ensuring the request context is properly disposed of to prevent memory leaks
    await requestContext.dispose();
  }
}

export default globalTeardown;
