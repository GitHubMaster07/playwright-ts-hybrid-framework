# Playwright TypeScript Hybrid Framework 🚀

![Playwright Tests](https://github.com/YOUR_USERNAME/playwright-ts-hybrid-framework/actions/workflows/playwright.yml/badge.svg)

A high-performance automation framework designed for **UI and API testing**, featuring a strictly typed architecture and integrated CI/CD pipeline.

## 🌟 Project Overview
This project demonstrates a professional **Hybrid Testing** approach. It doesn't just check the UI; it validates the data layer via REST APIs in the same execution cycle, ensuring full-stack reliability.

## 🛠️ Key Technical Features
- **Strict TypeScript Implementation**: Leverages TS interfaces and `as const` assertions for a 100% type-safe data layer.
- **Page Object Model (POM)**: Implements a clean separation of concerns, making tests resilient to UI changes.
- **Cross-Browser Execution**: Validated on Chromium, Firefox, and WebKit.
- **Environment Agnostic**: Uses `dotenv` for local development and GitHub Secrets for secure CI/CD execution.
- **Visual Regression**: Built-in visual snapshot testing with support for cross-platform (Windows vs Linux) rendering.
- **Selective Tagging**: Features a `@smoke` suite for rapid deployment checks.

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18 or higher)
- GitHub account (for CI/CD features)

### 2. Local Setup
```bash
# Clone the repository
git clone [https://github.com/GitHubMaster07/playwright-ts-hybrid-framework.git](https://github.com/YOUR_USERNAME/playwright-ts-hybrid-framework.git)
cd playwright-ts-hybrid-framework

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install --with-deps
