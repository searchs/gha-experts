# React TypeScript Unit Testing Setup

This React project uses **Vitest** and **React Testing Library** for unit testing TypeScript components.

## Test Dependencies Installed

- **vitest** - Lightning-fast unit test framework powered by Vite
- **@testing-library/react** - Testing utilities for React components
- **@testing-library/jest-dom** - Custom matchers for asserting DOM state
- **jsdom** - JavaScript implementation of the DOM
- **@vitest/ui** - UI dashboard for test visualization

## Running Tests

### Run all tests
```bash
npm run test
```

### Run tests in watch mode (auto-rerun on file changes)
```bash
npm run test -- --watch
```

### View tests in UI dashboard
```bash
npm run test:ui
```

### Generate coverage report
```bash
npm run test:coverage
```

## Test Files

- `src/App.test.tsx` - Tests for the main App component

## Test Structure

Tests are written using:
- **Vitest** (`describe`, `it`, `expect`, `beforeEach`)
- **React Testing Library** (`render`, `screen`, `fireEvent`)
- Queries: `getByText`, `getByRole`
- Assertions: `toBeInTheDocument`, `toHaveStyle`

## Example Test

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByText(/Documented API in CurrencyLand/i)
    expect(heading).toBeInTheDocument()
  })
})
```

## Best Practices

1. **Test user behavior** - Write tests that simulate how users interact with components
2. **Use semantic queries** - Prefer `getByRole` and `getByText` over `getByTestId`
3. **Keep tests focused** - Each test should verify one piece of functionality
4. **Use meaningful descriptions** - Write clear test names that describe what is being tested
