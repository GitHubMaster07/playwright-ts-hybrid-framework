/**
 * Global Test Data Registry.
 * Centralized repository for environment URLs and shared credentials.
 * Supports dynamic environment switching via process.env.
 */
export const testData = {
    /**
     * Application Entry Points.
     * Logic ensures fallback to production/stable environments if BASE_URL is not injected via CI.
     */
    urls: {
        google: 'https://www.google.com',
        sauceDemo: process.env.BASE_URL || 'https://www.saucedemo.com'
    },

    /**
     * Managed Test Credentials.
     * Note: For sensitive production environments, it is recommended to use 
     * encrypted secrets (e.g., GitHub Secrets or Vault) instead of hardcoded strings.
     */
    credentials: {
        standardUser: 'standard_user',
        password: 'secret_sauce'
    }
} as const; // Using 'as const' to ensure deep immutability of test data
