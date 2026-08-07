import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      'allure-results/**',
      'allure-report/**',
    ],
  },

  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
  },

  {
    files: ['tests/**/*.ts'],
    ...playwright.configs['flat/recommended'],
  }
);
