# Playwright TypeScript Hybrid Framework 🎭

![Playwright CI](https://github.com/GitHubMaster07/playwright-ts-hybrid-framework/actions/workflows/playwright.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## 📌 Executive Summary
This repository features a professional-grade **End-to-End (E2E) Hybrid Automation Framework**. Unlike standard UI automation projects, this framework is engineered as a **Unified Testing Ecosystem** that orchestrates UI-driven user journeys with backend API validation to ensure absolute data integrity across the full application stack.

## 🏗️ Architectural Core
- **Fluent Page Object Model (POM)**: Implements strictly-typed classes to decouple interaction logic from test scripts, ensuring high maintainability and 0% selector duplication.
- **Type-Safe Environment Management**: Leverages TypeScript interfaces and `as const` assertions to manage multi-environment configurations (QA/Staging/Prod) securely.
- **API Integrated Orchestration**: Uses Playwright’s native `request` context to perform "pre-test" state setup and "post-test" data cleanup, significantly reducing execution time.
- **Cross-Platform Visual Regression**: Built-in snapshot comparison engine to identify UI regressions across Chromium, Firefox, and WebKit.

## 🛠️ Technical Stack
- **Engine**: Playwright (supporting Multi-Browser & Mobile Emulation)
- **Language**: TypeScript (Strict Mode)
- **Reporting**: **Allure Report** & Playwright Trace Viewer for deep failure analysis.
- **CI/CD**: GitHub Actions with artifact preservation (Screenshots, Videos, Traces).
- **Quality Gates**: ESLint & Prettier for consistent code standards.

## 🧩 Framework Structure
```text
.
├── .github/workflows/    # CI/CD Pipeline (GitHub Actions)
├── src/
│   ├── pages/            # Page Object Models (POM)
│   ├── api/              # API Client & Request Specs
│   ├── data/             # Strictly-typed Test Data & Env Config
│   └── utils/            # Shared Helper Functions
├── tests/                # Feature-based Test Suites
├── playwright.config.ts  # Global Framework Configuration
└── .env.template         # Environment Variable Template
```

🚀 **Getting Started**
1. Prerequisites
- Node.js (v18+)
- VS Code (Recommended)

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/GitHubMaster07/playwright-ts-hybrid-framework.git

# Install dependencies
npm install

# Install browser binaries
npx playwright install --with-deps
```
### 3. Execution
```bash
# Run all tests in parallel across all configured browsers
npx playwright test

# Run specific suite (e.g., Smoke tests)
npx playwright test --grep "@smoke"

# Generate & Open Allure Report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

📈 **Enterprise Capabilities**

✅ Stateless Parallelization: Thread-safe execution using isolated browser contexts for maximum throughput.

✅ Automated Retries: Intelligent retry logic and flaky-test management for stable CI/CD pipelines.

✅ Dynamic Data Injection: Native support for data-driven testing via JSON and TypeScript objects.

✅ Full Observability: Integrated recording of videos, console logs, and network traces for every test step.


---
### 👤 Author
**Sergei Volodin** *Sr.QA Automation Engineer/SDET* 📍 Chicago, IL  
🔗 [LinkedIn](https://www.linkedin.com/in/serge-vol/) | [GitHub Portfolio](https://github.com/GitHubMaster07/-Sergei-Volodin-_portfolio) | [Email](sergevolqaengineer@gmail.com)
