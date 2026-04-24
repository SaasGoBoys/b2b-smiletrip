# Testing Guide - Unit and Integration Testing in Clean Architecture Frontend

> Goal: explain why testing matters, what to test in each layer, and how to keep tests maintainable in this codebase.
>
> Stack: **Vitest + React Testing Library + MSW**

---

## Part 1: Why write tests?

### 1.1 Tests prevent regressions

The main value is not finding bugs once; it is preventing known bugs from returning silently during refactors.

### 1.2 Tests are living documentation

README comments can become stale. Passing tests describe current behavior and fail when behavior changes.

### 1.3 Tests enable confident refactoring

Without tests, refactor risk is unknown. With tests, failures point directly to broken behavior.

### 1.4 Cost in practice

Good tests add upfront time, but reduce debugging and hotfix cost over project lifetime.

---

## Part 2: Testing Pyramid

- **Domain (Entity/VO)** -> Unit tests (fast, high coverage).
- **Application (Commands/Queries)** -> Unit tests with mocked repositories.
- **Infrastructure (Repositories)** -> Integration tests with MSW.
- **Presentation (hooks/components)** -> Integration tests using RTL + MSW.

Keep most tests in lower layers (faster and more stable), then add integration tests for critical flows.

---

## Part 3: Unit Testing

### 3.1 Domain layer

Test business rules and invariants:

- constructors/factories
- value normalization
- domain behavior methods
- equality/identity logic

### 3.2 Application layer

For command/query handlers:

- mock repository ports with `vi.fn()`
- assert correct request-to-repository mapping
- cover happy path and error path

### 3.3 Presentation component unit tests

Only test your own rendering/branching logic. Do not re-test third-party UI libraries.

### 3.4 Mapper/pure function tests

If mapping includes logic (date handling, derived flags, formatting), test it as pure functions.

---

## Part 4: Integration Testing

### 4.1 MSW setup

Use MSW to intercept network calls at boundary level:

- Browser: `src/mocks/browser.ts`
- Node tests: `src/mocks/server.ts`
- Global setup: `src/test/setup.ts`

Reset handlers and mutable mock data after each test to keep isolation.

### 4.2 Hook integration tests

Test hooks with real QueryClient/provider wrappers and MSW-backed HTTP behavior.

### 4.3 Full-slice integration tests

For high-value flows, test bus + handler + repository + mocked API together.

---

## Part 5: Best Practices

### 5.1 AAA pattern

- **Arrange**: setup data and mocks
- **Act**: execute behavior
- **Assert**: verify outcomes

### 5.2 Naming

Use behavior-focused names so tests read like specifications.

### 5.3 Test data builders

Use reusable builders/factories instead of repeating large setup blocks.

### 5.4 One concept per test

A test can have multiple assertions, but should validate one coherent behavior.

### 5.5 Test boundaries

Test public interfaces (handler APIs, repository methods), not internal implementation details.

### 5.6 Avoid framework re-testing

Do not test React/AntD/React Query internals.

### 5.7 Isolation

Each test should be independent and runnable in any order.

---

## Part 6: What not to test

- third-party library internals
- TypeScript-only types/interfaces
- trivial getters without business logic

Focus effort on behavior that can actually break business outcomes.

---

## Part 7: CI/CD integration

### 7.1 Vitest config

Ensure:

- `setupFiles` includes `src/test/setup.ts`
- test include pattern covers `*.test.ts(x)` and `*.spec.ts(x)`
- environment is selected per test type (`node` for repository/domain, `jsdom` for UI tests)

### 7.2 Package scripts

Recommended scripts:

- `test`
- `test:run`
- `test:coverage`
- `test:watch`

Optional split:

- `test:unit`
- `test:integration`

### 7.3 CI pipeline

Typical order:

1. lint + typecheck
2. unit tests
3. integration tests
4. coverage reporting

---

## Part 8: Quick reference

### Which test type by layer?

- Domain -> unit
- Application -> unit (mock ports)
- Infrastructure -> integration (MSW)
- Presentation -> integration (RTL + MSW)

### PR checklist

- New domain business rules have tests.
- Commands/queries include happy + error path tests.
- Critical repository adapters have MSW integration tests.
- No skipped tests without a reason.
- Tests are deterministic and isolated.

---

For detailed Vietnamese examples and extended code snippets, see `docs-vi/TESTING_GUIDE.md`.
