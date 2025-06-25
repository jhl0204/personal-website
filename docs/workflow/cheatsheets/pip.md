---
sidebar_position: 2
---


## What is `pip`?

Probably the first thing I heard about when I started programming. 
- `pip` is Python's default package manager. 
- Allows you to install and manage packages from the Python Package Index (PyPI)
    - Think of downloading essential third-party libraries like `requests`, `pandas`, `flask`. 
- Without `pip`, you'll have to resort to just Python's standard library. 



## Common Commands

| Description                     | Command Example                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| Install a package               | `pip install requests`                                                               |
| Uninstall a package             | `pip uninstall matplotlib`                                                           |
| List installed packages         | `pip list`                                                                           |
| Save current packages to a file | `pip freeze > requirements.txt`                                                      |
| Install packages from a file    | `pip install -r requirements.txt`                                                    |
| Search for package *            | `pip freeze \| grep flask`                                                           |

\* grep stands for `global regular expression print`

## Comparing pip to Other Language Package Managers

Every modern programming language has a **package manager** — a tool to install, manage, and publish reusable libraries. If you're coming from JavaScript, Java, or another ecosystem, this table helps map concepts across languages.

### pip vs npm (Python vs JavaScript)

| Feature                        | `pip` (Python)                        | `npm` (JavaScript)                    |
|-------------------------------|----------------------------------------|----------------------------------------|
| **Purpose**                   | Install Python packages                | Install JavaScript packages (Node.js) |
| **Default Registry**          | [PyPI](https://pypi.org)               | [npmjs.com](https://www.npmjs.com)     |
| **Dependency File**           | `requirements.txt`                    | `package.json`                         |
| **Dependency Lock File**      | No official (some use `pip-tools`)    | `package-lock.json`                    |
| **Virtual Environment**       | `venv`, `virtualenv`                  | `node_modules/` (project-level isolation) |
| **Install All Dependencies**  | `pip install -r requirements.txt`     | `npm install`                          |
| **Save Installed Package**    | Manual (edit `requirements.txt`)      | Automatic (`npm install pkg --save`)   |
| **Global Install Flag**       | `pip install package` (global by default unless in venv) | `npm install -g package`               |
| **Uninstall Package**         | `pip uninstall package`               | `npm uninstall package`                |
| **Publish a Package**         | `twine upload`                        | `npm publish`                          |

### Similarities

- Both use central **registries** (PyPI, npmjs) to fetch packages
- Both allow installing packages **globally or locally**
- Both support **version constraints** (e.g., `flask==2.2.0`, `react@17.0.0`)
- Both support **dev vs runtime dependencies** (via workflows)

### Key Differences

- **Environment Isolation**:
  - `npm` handles isolation via a **local `node_modules` folder**
  - `pip` relies on **external isolation** using `venv` or `conda`
- **Lock files**:
  - `npm` automatically generates `package-lock.json` to lock exact versions
  - `pip` does not do this natively; third-party tools like `pip-tools` or `poetry` are needed
- **Dependency Trees**:
  - `npm` installs **nested dependencies** in `node_modules`
  - `pip` installs everything **flat** (resolved to top-level)

---

## Other Language Analogs

| Language        | Package Manager   | Dependency File            |
|----------------|-------------------|----------------------------|
| **Python**      | `pip`             | `requirements.txt`         |
| **JavaScript**  | `npm`, `yarn`     | `package.json`             |
| **Ruby**        | `bundler`         | `Gemfile`, `Gemfile.lock`  |
| **Java**        | `Maven`, `Gradle` | `pom.xml`, `build.gradle`  |
| **Rust**        | `cargo`           | `Cargo.toml`               |
| **Go**          | `go mod`          | `go.mod`, `go.sum`         |
| **PHP**         | `composer`        | `composer.json`            |
| **.NET**        | `nuget`           | `.csproj`, `packages.config`|

---

## Summary

Once you understand one ecosystem’s package management (e.g., `pip` in Python), you can **transfer that mental model** to others like `npm`, `cargo`, or `bundler`. While the tooling details differ, the core idea is the same:

> "Define and install third-party packages in a reproducible way."

Pattern recognition across ecosystems makes you a more effective polyglot developer.

