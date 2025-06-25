---
sidebar_position: 3
---

# npm vs npx

## What's the Difference?

`npm` (Node Package Manager) and `npx` (Node Package Execute) serve different but complementary purposes in the Node.js ecosystem.

### npm (Node Package Manager)
- Primary purpose: **Package Management**
- Main functions:
  - Installing packages (`npm install`)
  - Managing dependencies
  - Running scripts defined in package.json
  - Publishing packages
- Installs packages either globally (`-g`) or locally in node_modules

### npx (Node Package Execute)
- Primary purpose: **Package Execution**
- Main functions:
  - Execute packages without installation
  - Run one-off commands
  - Test different package versions
  - Avoid global installations
- Automatically cleans up after execution

## Common Use Cases

### npm Examples
```bash
# Install a package locally
npm install express

# Install a package globally
npm install -g create-react-app

# Run a script from package.json
npm run start

# Install all project dependencies
npm install
```

### npx Examples
```bash
# Create a new React app without global installation
npx create-react-app my-app

# Run a specific version of a package
npx cowsay "Hello"

# Execute a package without installing
npx http-server
```

## When to Use Which?

Use **npm** when:
- Managing project dependencies
- Installing tools you use frequently
- Running project scripts
- Publishing packages

Use **npx** when:
- Running one-time commands
- Testing different package versions
- Avoiding global installations
- Running packages directly from npm registry

## Best Practices

1. Prefer local installations over global
2. Use npx for create-* commands
3. Use npm scripts for project-specific commands
4. Keep package.json scripts clear and documented 