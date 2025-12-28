import dotenv from 'dotenv';
dotenv.config();
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  // 🧹 This points Playwright to your cleanup script
  globalTeardown: require.resolve('./src/utils/global-teardown'),

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter to use. */
  reporter: [
    ['html'], 
    ['allure-playwright']
  ],

  /* Shared settings for all projects. */
  use: {
    /* Base URL from .env file */
    baseURL: process.env.BASE_URL, 

    /* Debugging tools */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure', // Added video for even better Senior-level reporting
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});