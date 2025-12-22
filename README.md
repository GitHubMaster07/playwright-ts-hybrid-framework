# Playwright TypeScript Hybrid Framework 🚀

![Playwright Tests](https://github.com/GitHubMaster07/playwright-ts-hybrid-framework/actions/workflows/playwright.yml/badge.svg)

## 📌 Overview
This repository showcases a professional-grade **Hybrid Automation Framework** designed for high-velocity environments. It integrates **UI, API, and Visual Regression testing** into a single TypeScript-based ecosystem, optimized for modern CI/CD pipelines.

## 🏗️ Architectural Highlights
- **Page Object Model (POM)**: Enhanced with TypeScript interfaces for strict element typing.
- **API Integrated Validation**: Direct backend state verification to support UI flows, reducing test fragility.
- **Type-Safe Environment Management**: Custom configuration layer using `dotenv` and TS assertions to handle multi-environment URLs and secrets.
- **Cross-Platform Visual Regression**: Implements pixel-comparison snapshots with automated handling for OS-specific rendering (Linux/Windows).

## 🛠️ Toolchain
- **Language**: TypeScript
- **Engine**: Playwright (Chromium, Firefox, WebKit)
- **CI/CD**: GitHub Actions (Smoke & Full Regression workflows)
- **Reporting**: Playwright HTML Reporter & Trace Viewer

## 🚀 Execution
```bash
# Install dependencies
npm install

# Run Smoke Suite (@smoke tag)
npx playwright test --grep "@smoke"

# Run Full Hybrid Suite
npx playwright test
