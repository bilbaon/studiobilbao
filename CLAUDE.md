# CLAUDE.md - AI Assistant Guide for studiobilbao

This file provides guidance for AI assistants working with the studiobilbao codebase.

## Project Overview

**studiobilbao** is a new project repository. The codebase is in its initial state and ready for development.

### Repository Status
- **Current State**: Fresh repository with minimal setup
- **Main Files**: README.md
- **Tech Stack**: Not yet defined

## Codebase Structure

```
studiobilbao/
├── README.md          # Project description
├── CLAUDE.md          # AI assistant guidelines (this file)
└── .git/              # Git configuration
```

*Note: This structure will expand as the project develops. Update this section when adding new directories or key files.*

## Development Workflow

### Getting Started
1. Clone the repository
2. Check out the appropriate development branch
3. Follow the conventions documented below

### Git Workflow
- Create feature branches from the main branch
- Use descriptive commit messages following conventional commits format
- Push changes to feature branches, then create pull requests

### Commit Message Convention
Use the following prefixes for commit messages:
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style/formatting (no logic changes)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks, dependencies, configs

Example: `feat: add user authentication module`

## Code Conventions

### General Guidelines
1. **Keep it simple** - Prefer straightforward solutions over complex abstractions
2. **Be consistent** - Follow existing patterns in the codebase
3. **Document intent** - Add comments for non-obvious logic
4. **Test thoroughly** - Write tests for new functionality

### File Naming
- Use lowercase with hyphens for file names (e.g., `user-service.ts`)
- Use PascalCase for component files (e.g., `UserProfile.tsx`)
- Configuration files in root directory

### Code Style
- Use consistent indentation (2 spaces recommended)
- Prefer explicit over implicit
- Keep functions focused and small
- Use meaningful variable and function names

## Commands Reference

*This section will be populated as the project tooling is established.*

### Build Commands
```bash
# Commands will be added here when build system is configured
```

### Test Commands
```bash
# Commands will be added here when testing is set up
```

### Lint/Format Commands
```bash
# Commands will be added here when linting is configured
```

## Architecture Decisions

*Document key architectural decisions here as the project evolves.*

| Decision | Rationale | Date |
|----------|-----------|------|
| (To be documented) | | |

## Important Files

*List critical files that AI assistants should be aware of:*

| File | Purpose |
|------|---------|
| `README.md` | Project overview and setup instructions |
| `CLAUDE.md` | AI assistant guidelines |

## Testing Guidelines

1. Write tests alongside new features
2. Maintain test coverage for critical paths
3. Run tests before committing changes

## Security Considerations

1. Never commit secrets, API keys, or credentials
2. Use environment variables for sensitive configuration
3. Review dependencies for known vulnerabilities
4. Sanitize user inputs where applicable

## AI Assistant Guidelines

### When Working on This Codebase

1. **Read before modifying** - Always read relevant files before making changes
2. **Understand context** - Explore related code to understand patterns
3. **Make minimal changes** - Only modify what's necessary for the task
4. **Preserve style** - Match existing code conventions
5. **Test changes** - Verify modifications work as expected

### Common Tasks

#### Adding a New Feature
1. Understand the requirement fully
2. Identify where the feature fits in the architecture
3. Implement following existing patterns
4. Add appropriate tests
5. Update documentation if needed

#### Fixing a Bug
1. Reproduce the issue to understand it
2. Identify the root cause
3. Implement the minimal fix
4. Verify the fix resolves the issue
5. Add tests to prevent regression

#### Refactoring
1. Understand the current implementation
2. Identify the improvement needed
3. Make incremental changes
4. Ensure tests pass after each change
5. Document significant changes

### What to Avoid

- Don't add unnecessary dependencies
- Don't over-engineer solutions
- Don't make changes outside the scope of the task
- Don't commit untested code
- Don't ignore existing patterns without good reason

## Updating This Document

This CLAUDE.md should be updated when:
- Project structure changes significantly
- New development tools or commands are added
- Coding conventions are established or modified
- New architectural decisions are made
- Important patterns emerge that AI assistants should follow

---

*Last updated: 2026-01-28*
