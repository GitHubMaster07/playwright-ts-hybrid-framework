# Playwright TypeScript Automation Framework 🎭

<p align="center">

![Build](https://github.com/GitHubMaster07/playwright-typescript-quality-framework/actions/workflows/playwright.yml/badge.svg)
![GitHub Release](https://img.shields.io/github/v/release/GitHubMaster07/playwright-typescript-quality-framework)
![Playwright](https://img.shields.io/badge/Playwright-Test_Automation-45ba4b?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-Quality_Gate-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Formatter-Prettier-F7B93E?logo=prettier&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)
![GitHub Stars](https://img.shields.io/github/stars/GitHubMaster07/playwright-typescript-quality-framework)
![Last Commit](https://img.shields.io/github/last-commit/GitHubMaster07/playwright-typescript-quality-framework)

</p>

A production-inspired Playwright automation framework built with **TypeScript**, demonstrating maintainable test architecture, UI automation, API validation, runtime contract validation, hybrid testing, visual regression, and CI/CD quality gates.

---

## Key Capabilities

- ✅ Page Object Model (POM)
- ✅ API Client Layer
- ✅ Custom Playwright Fixtures
- ✅ Dependency Injection
- ✅ Centralized Environment Configuration
- ✅ UI Automation
- ✅ API Validation
- ✅ Runtime API Contract Validation with Zod
- ✅ Hybrid UI ↔ API Validation
- ✅ Visual Regression Testing
- ✅ Cross-browser & Parallel Execution
- ✅ GitHub Actions CI/CD
- ✅ Scheduled Cross-browser Regression
- ✅ TypeScript Strict Mode
- ✅ ESLint & Prettier
- ✅ HTML Report, Allure & Trace Viewer

---

## Why This Project?

This repository focuses on engineering quality rather than simply browser automation. It demonstrates clean architecture, reusable components, dependency injection, service-layer design, runtime validation, CI/CD integration, and maintainable automation practices.

The framework intentionally keeps the test suite compact. The goal is to demonstrate engineering decisions and reusable patterns rather than maximize the number of test cases.

---

## Architecture

```text
                  Environment Config
                         │
                         ▼
                    Test Suites
                         │
                         ▼
               Playwright Fixtures
                         │
          ┌──────────────┴──────────────┐
          ▼                             ▼
     Page Objects                  API Clients
          │                             │
          └──────────────┬──────────────┘
                         ▼
                  Playwright Engine
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      Chromium        Firefox        WebKit
```

---

## Project Structure

```text
.
├── .github/
│   └── workflows/
├── src/
│   ├── api/
│   ├── config/
│   ├── data/
│   ├── fixtures/
│   ├── pages/
│   └── utils/
├── tests/
│   └── visual.spec.ts-snapshots/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Technology Stack

| Area              | Technology                    |
| ----------------- | ----------------------------- |
| Language          | TypeScript                    |
| Framework         | Playwright                    |
| API               | Playwright Request API        |
| Runtime Contracts | Zod                           |
| Pattern           | Page Object Model             |
| Architecture      | API Clients + Custom Fixtures |
| Configuration     | dotenv + Environment Config   |
| Reporting         | HTML Report + Allure          |
| CI/CD             | GitHub Actions                |
| Code Quality      | ESLint + Prettier             |

---

## Quality Gates

Every push and pull request validates:

- TypeScript type checking
- ESLint
- Prettier
- Focused Chromium validation
  - UI
  - API
  - Hybrid UI ↔ API
  - Visual regression
- HTML report generation
- Test artifact upload

Full Chromium, Firefox, and WebKit regression is available through manual workflow execution and scheduled CI runs.

Local quality workflow:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
```

---

## Environment Configuration

Environment-specific endpoints are centralized in the framework configuration rather than hardcoded across tests, page objects, and API clients.

Supported configuration includes:

- `BASE_URL`
- `USERS_API_URL`
- `ROOMS_API_URL`
- `ROOMS_UI_URL`

Public demo endpoints have local fallback values so the repository can be cloned and executed without mandatory secrets.

A local `.env` file can be used to override defaults when needed.

---

## API Architecture

Backend communication is encapsulated in reusable API clients instead of being performed directly inside tests.

The API layer provides:

- centralized endpoint configuration
- HTTP status validation
- typed response models
- runtime response validation
- reusable API operations
- separation between test intent and transport logic

Runtime schema validation is implemented with **Zod**, allowing API payloads to be validated at execution time rather than relying only on TypeScript compile-time assertions.

---

## Hybrid UI ↔ API Validation

The framework includes a hybrid scenario that validates application data across frontend and backend layers.

The test:

1. Retrieves room data through the API client.
2. Opens the corresponding UI.
3. Reads rendered room information through the Page Object.
4. Compares UI data with the backend response.

This demonstrates cross-layer validation while keeping API, UI, and test responsibilities separated.

---

## Visual Regression

Playwright screenshot assertions provide visual regression coverage.

Approved visual baselines are version-controlled for:

- Windows
- Linux
- Chromium
- Firefox
- WebKit

CI compares rendered output against approved Linux baselines rather than generating new baselines during validation.

Baseline updates are intentional changes and should be reviewed before being committed.

---

## Reliability Strategy

This portfolio framework intentionally uses public demo applications and APIs. Because these external systems are not controlled by the repository, failures are classified before being treated as product regressions.

### Failure Classification

- **Product failure** — deterministic assertion failure caused by incorrect application behavior.
- **Infrastructure failure** — DNS, TLS, timeout, service outage, or external dependency unavailability.
- **Visual failure** — approved baseline differs from the rendered UI.
- **Flaky failure** — a test produces inconsistent results without a deterministic product change.

### Reliability Controls

- CI retries are enabled only in CI to reduce noise from transient infrastructure issues.
- Pull requests run a focused Chromium validation suite for fast feedback.
- Full Chromium, Firefox, and WebKit regression runs manually and on a scheduled basis.
- Screenshots, videos, traces, HTML reports, and test artifacts are retained for investigation.
- Visual baselines are version-controlled separately for Windows and Linux.
- External-service failures are investigated before assertions or visual baselines are changed.

### Flakiness Policy

A failing test should not be automatically classified as flaky.

Before changing or quarantining a test:

1. Reproduce the failure.
2. Review Playwright trace, screenshot, video, and network behavior.
3. Determine whether the failure originated from the application, test code, or external infrastructure.
4. Update the test only when the root cause is understood.

Retries are diagnostic protection against transient failures, not a substitute for fixing unstable tests.

---

## Engineering Decisions

- **Page Objects** isolate selectors and browser interactions from business assertions.
- **API Clients** encapsulate backend communication and response handling.
- **Custom Fixtures** provide reusable dependency injection for pages and API clients.
- **Environment Configuration** keeps endpoints outside implementation classes.
- **Runtime Contracts** validate external API payloads instead of relying only on TypeScript casts.
- **Hybrid UI ↔ API Testing** validates business data across application layers.
- **Visual Baselines** are version-controlled and platform-specific.
- **Parallel Execution** uses isolated Playwright browser contexts.
- **Focused PR Validation** provides fast feedback while scheduled regression preserves broader cross-browser coverage.

---

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/GitHubMaster07/playwright-typescript-quality-framework.git
cd playwright-typescript-quality-framework
npm install
npx playwright install --with-deps
```

Run the complete test suite:

```bash
npm test
```

Additional commands:

```bash
npm run test:smoke
npm run test:ui
npm run lint
npm run format:check
npm run typecheck
npm run report:allure
```

---

## Reports & Diagnostics

The framework provides:

- Playwright HTML Report
- Allure Report
- Playwright Trace Viewer
- Screenshots on failure
- Video on failure
- CI test artifacts

These artifacts support root-cause investigation without requiring immediate local reproduction.

---

## CI Strategy

The CI pipeline separates fast feedback from broader regression coverage.

### Push / Pull Request

Runs quality gates followed by a focused Chromium validation suite covering:

- login workflow
- API validation
- hybrid UI ↔ API validation
- visual regression

### Manual / Scheduled Execution

Runs the complete test suite across:

- Chromium
- Firefox
- WebKit

This keeps pull-request feedback focused while preserving regular cross-browser validation.

---

## Roadmap

Potential future extensions:

- Expand runtime schema validation across additional APIs
- Authentication state management
- Test data builders
- Accessibility validation
- Performance testing

The framework intentionally avoids adding features solely to increase repository size; future additions should demonstrate a distinct Quality Engineering capability.

---

## Release

**Current Version:** **v1.1.0**

Stabilized portfolio release featuring centralized environment configuration, reusable API clients, Zod runtime contract validation, custom Playwright fixtures, hybrid UI ↔ API validation, cross-platform visual regression, and scheduled cross-browser CI.

---

## Author

**Sergei Volodin**  
Senior Quality Engineer / SDET

- LinkedIn: https://www.linkedin.com/in/serge-vol/
- GitHub Portfolio: https://github.com/GitHubMaster07/-Sergei-Volodin-_portfolio

---

⭐ If you find this repository useful, consider starring it on GitHub.
