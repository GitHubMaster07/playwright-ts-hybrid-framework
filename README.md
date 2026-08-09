# Playwright TypeScript Automation Framework 🎭

<p align="center">

![Build](https://github.com/GitHubMaster07/playwright-typescript-quality-framework/actions/workflows/playwright.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Playwright-Test_Automation-45ba4b?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-Quality_Gate-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Formatter-Prettier-F7B93E?logo=prettier&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-v1.0.0-blue)

</p>

A production-inspired Playwright automation framework built with **TypeScript** demonstrating scalable test architecture, UI automation, API validation, hybrid testing and enterprise CI/CD practices.

---

## Key Capabilities

- ✅ Page Object Model (POM)
- ✅ API Client Layer
- ✅ Custom Playwright Fixtures
- ✅ Dependency Injection
- ✅ UI Automation
- ✅ API Validation
- ✅ Hybrid UI ↔ API Validation
- ✅ Visual Regression Testing
- ✅ Cross-browser & Parallel Execution
- ✅ GitHub Actions CI/CD
- ✅ TypeScript Strict Mode
- ✅ ESLint & Prettier
- ✅ HTML Report, Allure & Trace Viewer

---

## Why This Project?

This repository focuses on engineering quality rather than simply browser automation. It demonstrates clean architecture, reusable components, dependency injection, service-layer design, CI/CD integration and maintainable automation practices.

---

## Architecture

```text
                   Test Suites
                        │
                        ▼
              Playwright Fixtures
                        │
          ┌─────────────┴─────────────┐
          ▼                           ▼
    Page Objects                 API Clients
          │                           │
          └─────────────┬─────────────┘
                        ▼
                 Playwright Engine
                        │
          ┌─────────────┼─────────────┐
          ▼             ▼             ▼
      Chromium       Firefox       WebKit
```

---

## Project Structure

```text
.
├── .github/workflows/
├── src/
│   ├── api/
│   ├── fixtures/
│   ├── pages/
│   ├── data/
│   └── utils/
├── tests/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Technology Stack

| Area         | Technology             |
| ------------ | ---------------------- |
| Language     | TypeScript             |
| Framework    | Playwright             |
| API          | Playwright Request API |
| Pattern      | Page Object Model      |
| Architecture | API Clients + Fixtures |
| Reporting    | HTML Report + Allure   |
| CI/CD        | GitHub Actions         |
| Code Quality | ESLint + Prettier      |

---

## Quality Gates

Every push and pull request validates:

- TypeScript
- ESLint
- Prettier
- Smoke Tests
- HTML Report generation
- Artifact upload

Local workflow:

```bash
npm run lint
npm run format:check
npm run typecheck
npm test
```

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
- External-service failures should be investigated before updating assertions or visual baselines.

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

- **Page Objects** isolate browser interactions.
- **API Clients** encapsulate backend communication.
- **Custom Fixtures** provide dependency injection.
- **Hybrid UI ↔ API** validates business data across layers.
- **Parallel Execution** uses isolated browser contexts.

---

## Getting Started

```bash
git clone https://github.com/GitHubMaster07/playwright-typescript-quality-framework.git
cd playwright-typescript-quality-framework
npm install
npx playwright install --with-deps
```

Run tests:

```bash
npm test
npm run test:smoke
npm run test:ui
npm run report:allure
```

---

## Reports

- HTML Report
- Allure Report
- Trace Viewer
- Screenshots
- Videos
- Failure Artifacts

Recommended screenshots:

- docs/images/github-actions.png
- docs/images/playwright-report.png
- docs/images/allure-report.png

---

## Roadmap

- Contract Testing
- Authentication
- Docker
- Test Data Builders
- Accessibility
- Performance Testing

---

## Release

**Current Version:** **v1.0.0**

Initial portfolio release demonstrating a production-inspired Playwright framework with reusable architecture, API clients, fixtures, hybrid validation and CI/CD quality gates.

---

## Author

**Sergei Volodin**  
Senior Quality Engineer / SDET

- LinkedIn: https://www.linkedin.com/in/serge-vol/
- GitHub Portfolio: https://github.com/GitHubMaster07/-Sergei-Volodin-_portfolio

---

⭐ If you find this repository useful, consider starring it on GitHub.
