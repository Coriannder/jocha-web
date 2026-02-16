---
name: audit-pre-commit
description: Procedure for auditing code before committing, ensuring quality, type safety, and style consistency.
---

# Pre-Commit Audit Procedure

This skill defines the mandatory steps to perform BEFORE committing any code to the repository.

## 1. Automated Checks (Mandatory)

Run the following commands in the terminal and ensure they pass with **zero errors**:

```bash
# 1. Linting (ESLint) - Checks for code style and potential errors
npm run lint

# 2. Type Checking (TypeScript) - Ensures strict type safety
npx tsc --noEmit
```

> **STOP**: If any valid error is reported, FIX IT before proceeding.

## 2. Manual Code Audit (Agentic)

As an agent, you must verify the following in the code you modified:

### A. Clean Code & Logs
- [ ] **No `console.log`**: Remove all debug logs.
- [ ] **No Comments**: Remove commented-out code.
- [ ] **No `any`**: Ensure ALL variables and functions have explicit types. Use `unknown` or specific interfaces instead of `any`.

### B. Styling & Naming
- [ ] **Tailwind Classes**: Use standard classes. Avoid arbitrary values (e.g., `w-[123px]`) unless absolutely necessary.
- [ ] **Naming Conventions**:
    - Components: `PascalCase` (e.g., `MyComponent.tsx`)
    - Functions/Variables: `camelCase`
    - Constants: `UPPER_SNAKE_CASE`

### C. Architecture & Paths
- [ ] **Absolute Paths**: Use `@/` for imports (e.g., `import { cn } from "@/lib/utils"`).
- [ ] **Windows Paths**: In your tool calls and internal reasoning, ALWAYS use absolute Windows paths (e.g., `C:\Users\sebas\...`).

## 3. Commit Message Standards

When you are ready to commit (or suggest a commit to the user), use the following format:

```text
<type>(<scope>): <short description>

- <detail 1>
- <detail 2>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring without behavior change
- `style`: Formatting, missing semi colons, etc.
- `docs`: Documentation only changes
- `chore`: Build process, dependencies
