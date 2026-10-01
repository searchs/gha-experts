# GHA Experts — GitHub Actions & DevOps Engineering Case Study

This repository is retained as an **engineering case study** for CI/CD, repository quality gates and software-delivery automation.

The sample workload originated as the **DevOps Highland** project: a small FastAPI service and React/Vite frontend used as a practical target for GitHub Actions and related engineering tooling. The workload itself is secondary; the durable value is the delivery pipeline and repository-engineering practice around it.

## Areas explored

The repository includes or experiments with:

- GitHub Actions workflow design
- Python quality tooling with Ruff and uv
- frontend testing and formatting
- pre-commit automation
- YAML validation
- dependency automation with Dependabot
- security/static-analysis workflows such as CodeQL
- CI/CD and deployment automation
- documentation and repository quality practices
- conventional/versioned development workflows

Some integrations documented in older material may depend on external services or credentials and should not be assumed to be currently active simply because configuration remains in the repository.

## Repository structure

```text
.github/                 GitHub Actions and repository automation
src/                     Sample Python workload
transit/                 Additional engineering/workflow exercises
.pre-commit-config.yaml  Local quality gates
justfile                 Repeatable developer commands
pyproject.toml           Python/tooling configuration
uv.lock                  Reproducible Python dependency lock
```

## Purpose

Use this repository to test and demonstrate delivery-engineering patterns in isolation before applying them to commercial products. Changes should favour:

1. deterministic builds and installs;
2. least-privilege workflow permissions;
3. pinned or well-governed third-party actions;
4. explicit lint/test/type/security gates;
5. reproducible local equivalents for important CI commands;
6. clear separation between demonstration infrastructure and production credentials.

## Case-study boundary

This is not a production application or a general-purpose starter template. Patterns proven here can be promoted into maintained repositories, while experiments can remain isolated without increasing the operational surface of commercial products.
