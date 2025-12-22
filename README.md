# Playwright TypeScript Hybrid Framework 🚀

![Playwright Tests](https://github.com/GitHubMaster07/playwright-ts-hybrid-framework/actions/workflows/playwright.yml/badge.svg)

## 📌 Overview
A professional-grade **Hybrid Automation Framework** designed for high-velocity environments. This suite integrates **UI, API, and Visual Regression testing** into a single TypeScript ecosystem, optimized for modern CI/CD pipelines.

## 🏗️ Architectural Highlights
- **Page Object Model (POM)**: Enhanced with TypeScript interfaces for strict element typing and maintainability.
- **API Integrated Validation**: Direct backend state verification to support UI flows, significantly reducing test fragility.
- **Type-Safe Environment Management**: Custom configuration layer using `dotenv` and TS assertions to securely handle multi-environment URLs and secrets.
- **Cross-Platform Visual Regression**: Pixel-comparison snapshots with automated handling for OS-specific rendering differences.

## 📊 Advanced Reporting (Allure)
This framework uses **Allure Report** for stakeholder-friendly execution insights, featuring trend analysis and category-based defect tracking.

### View Reports Locally:
1. **Generate results**: `npx playwright test` (results are stored in `allure-results`)
2. **Open Allure**: 
   ```bash
   npx allure generate allure-results --clean -o allure-report
   npx allure open allure-report

🛠️ Tech Stack
Engine: Playwright (Chromium, Firefox, WebKit)

Language: TypeScript (Strict Mode)

CI/CD: GitHub Actions

Reporting: Allure Report & Playwright HTML Reporter

🚀 Getting Started
# Install dependencies
npm install

# Run Smoke Suite
npx playwright test --grep "@smoke"

# Run Full Hybrid Suite (UI + API)
npx playwright test

📈 CI/CD Pipeline
The .github/workflows/playwright.yml handles:

Parallel execution across all major browsers.

Automatic secret management for environment variables.

Preservation of test artifacts (Traces, Screenshots, and Allure data).
