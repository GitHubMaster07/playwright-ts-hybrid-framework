import { request, FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  const baseURL = config.projects[0].use.baseURL;
  const requestContext = await request.newContext();

  console.log('\n--- 🧹 Global Cleanup Started ---');
  
  // Place your cleanup logic here (e.g., deleting a test user)
  // Example: 
  // await requestContext.delete(`${baseURL}/api/cleanup`, { ... });

  await requestContext.dispose();
  console.log('--- ✅ Global Cleanup Finished ---\n');
}

export default globalTeardown;