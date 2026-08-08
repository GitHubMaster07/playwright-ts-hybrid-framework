# Playwright TypeScript Automation Framework 🎭

![Playwright](https://img.shields.io/badge/Playwright-1.57-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-success)
![ESLint](https://img.shields.io/badge/ESLint-Enabled-purple)
![Prettier](https://img.shields.io/badge/Prettier-Formatted-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A maintainable Playwright automation framework built with TypeScript.

This repository demonstrates modern Quality Engineering practices including:

- UI automation
- API validation
- Visual regression testing
- Cross-browser execution
- GitHub Actions CI
- TypeScript quality gates

The goal of this project is to demonstrate a clean, maintainable approach to browser automation rather than maximize the number of test cases.

---

# Design Principles

The framework is intentionally built around several engineering principles.

- Keep business tests readable.
- Separate test logic from page interactions.
- Prefer stable selectors (`data-test`) over brittle CSS selectors.
- Execute safely in parallel.
- Keep failures easy to investigate.
- Validate code quality before running automated tests.

---

# Repository Highlights

- Playwright Test Runner
- TypeScript (Strict Mode)
- Page Object Model (POM)
- API validation using Playwright Request API
- Visual regression testing
- Cross-browser execution
- GitHub Actions CI
- ESLint
- Prettier
- Allure Reporting
- Playwright Trace Viewer

---

# Architecture

```text
                    +----------------------+
                    |     Test Suites      |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |   Page Objects (POM) |
                    +----------+-----------+
                               |
                 +-------------+-------------+
                 |                           |
                 v                           v
        +----------------+         +-----------------+
        | Browser UI     |         | API Validation  |
        +----------------+         +-----------------+
                 \                  /
                  \                /
                   v              v
              +------------------------+
              |   Playwright Engine    |
              +------------------------+
                         |
         +---------------+----------------+
         |               |                |
         v               v                v
    Chromium         Firefox          WebKit
```

---

# Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── src/
│   ├── data/
│   ├── pages/
│   └── utils/
│
├── tests/
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

# Technology Stack

| Area       | Technology           |
| ---------- | -------------------- |
| Language   | TypeScript           |
| Framework  | Playwright           |
| Assertions | Playwright Test      |
| Reporting  | HTML Report + Allure |
| Linting    | ESLint               |
| Formatting | Prettier             |
| CI/CD      | GitHub Actions       |

---

# Quality Gates

Every push and pull request is validated through GitHub Actions.

The pipeline performs:

- TypeScript type checking
- ESLint validation
- Prettier formatting check
- Smoke test execution
- HTML report generation
- Test artifact upload

---

# Current Test Coverage

This repository currently demonstrates:

- Login workflow automation
- API response validation
- Visual regression testing
- Cross-browser execution
- Smoke testing
- Parallel execution
- Failure diagnostics

---

# Getting Started

## Prerequisites

- Node.js 18+
- npm

Clone the repository.

```bash
git clone https://github.com/GitHubMaster07/playwright-typescript-quality-framework.git

cd playwright-typescript-quality-framework
```

Install dependencies.

```bash
npm install
```

Install Playwright browsers.

```bash
npx playwright install --with-deps
```

---

# Environment Configuration

Create a `.env` file.

Example:

```text
BASE_URL=https://www.saucedemo.com
```

---

# Running Tests

Run the complete suite.

```bash
npm test
```

Run smoke tests.

```bash
npm run test:smoke
```

Run Playwright UI mode.

```bash
npm run test:ui
```

---

# Reports

Generate the Allure report.

```bash
npm run report:allure
```

Playwright automatically provides:

- HTML Report
- Trace Viewer
- Screenshots
- Videos
- Failure artifacts

---

# Engineering Decisions

Several implementation decisions were made intentionally.

### Page Object Model

Keeps selectors and browser interactions separate from business assertions.

### Stable Selectors

Tests use `data-test` attributes whenever available to reduce maintenance.

### Strict TypeScript

Type checking is enforced before test execution.

### Automated Quality Gates

Formatting, linting, and type validation run before browser automation in CI.

---

# Future Improvements

Possible enhancements include:

- reusable API client layer
- custom Playwright fixtures
- contract testing examples
- Docker execution
- test data factories
- additional business scenarios

---

# Author

**Sergei Volodin**

Senior Quality Engineer / SDET

📍 Chicago, Illinois

- LinkedIn: https://www.linkedin.com/in/serge-vol/
- GitHub Portfolio: https://github.com/GitHubMaster07/-Sergei-Volodin-_portfolio

---

*This repository is maintained as part of my Quality Engineering portfolio and reflects engineering practices I use when building maintainable automation frameworks.*