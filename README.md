# Playwright TypeScript Hybrid Framework 🎭

![Playwright Tests](https://github.com/GitHubMaster07/playwright-ts-hybrid-framework/actions/workflows/playwright.yml/badge.svg)

## 📌 Project Overview
This is a professional-grade **Hybrid Automation Framework** designed for high-velocity environments. It demonstrates a unified approach to testing by combining **UI Automation**, **REST API Validation**, and **Visual Regression** into a single, type-safe ecosystem.

## 🏗️ Architectural Features
- **Strictly Typed Data Layer**: Leverages TypeScript interfaces and `as const` assertions to manage environment-specific URLs and credentials safely.
- **Page Object Model (POM)**: Implements a clean separation of concerns, ensuring tests are resilient to UI changes.
- **Hybrid Testing Strategy**: Executes backend API checks alongside frontend UI flows to ensure full-stack data integrity.
- **Visual Regression**: Built-in pixel-perfect comparison logic with automated handling for **Linux vs Windows** rendering differences in CI/CD.
- **CI/CD Integration**: Fully automated via GitHub Actions with distinct workflows for `@smoke` tests and Full Regression.

## 🛠️ Technology Stack
- **Language**: TypeScript (Strict Mode)
- **Engine**: Playwright (Chromium, Firefox, WebKit)
- **Reporting**: **Allure Report** & Playwright HTML Reporter
- **CI/CD**: GitHub Actions
- **Env Management**: Dotenv & GitHub Secrets

## 📊 Reporting (Allure)
The framework is integrated with **Allure Report** for stakeholder-friendly execution insights.

### View Reports Locally:
1. **Run Tests**: `npx playwright test`
2. **Generate Report**: `npx allure generate allure-results --clean -o allure-report`
3. **Open Report**: `npx allure open allure-report`

## 🚀 Getting Started

### 1. Installation
```bash
npm install
npx playwright install --with-deps
