# justfile for devopx - FastAPI Project
# Commands are managed and run with uv

set shell := ["zsh", "-cu"]

# Default recipe
default:
	@just --list

# Install project dependencies
install:
	uv sync

# Install with optional dev dependencies included
install-all:
	uv sync --all-groups

# Run the FastAPI development server
dev:
	uv run fastapi dev src/main.py

# Run the FastAPI application
run:
	uv run uvicorn src.main:app --reload

# Format code with ruff
fmt:
	uv run ruff format src/

# Check code formatting
fmt-check:
	uv run ruff format src/ --check

# Lint code with ruff
lint:
	uv run ruff check src/ --fix

# Check linting without fixing
lint-check:
	uv run ruff check src/

# Format and lint
format: fmt lint
	@echo "✓ Formatting and linting complete"

# Run tests (requires pytest, can be added to dev dependencies)
test:
	uv run pytest tests/ -v

# Run tests with coverage
test-cov:
	uv run pytest tests/ --cov=src --cov-report=html

# Type checking with pyright (requires installation in dev dependencies)
type-check:
	uv run pyright src/

# Pre-commit checks
pre-commit:
	uv run pre-commit run --all-files

# Commit with commitizen
commit:
	uv run cz commit

# Bump version
bump-version:
	uv run cz bump

# Clean build artifacts and cache
clean:
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	find . -type d -name ".pytest_cache" -exec rm -rf {} + 2>/dev/null || true
	find . -type d -name ".ruff_cache" -exec rm -rf {} + 2>/dev/null || true
	find . -type d -name "*.egg-info" -exec rm -rf {} + 2>/dev/null || true
	rm -rf .coverage htmlcov dist build
	@echo "✓ Clean complete"

# Full development setup
setup: install-all format lint
	@echo "✓ Development environment ready"

# Development workflow: format, lint, and run dev server
work: format
	@just dev

# Show uvicorn help
help-uvicorn:
	uv run uvicorn --help

# Show fastapi help
help-fastapi:
	uv run fastapi --help

# Update dependencies
update:
	uv lock --upgrade

# Show project info
info:
	uv tree
