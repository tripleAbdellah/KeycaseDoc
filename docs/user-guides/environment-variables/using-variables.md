---
sidebar_position: 2
title: Using Variables
description: How to reference environment variables in your keywords and flows.
---

# Using Variables

Environment variables can be referenced in keyword parameters and flow configurations so that the same automation adapts to different targets.

## Referencing Variables

When configuring a keyword parameter in a flow, you can reference an environment variable instead of providing a static value. The variable will be resolved at execution time based on the selected environment.

## Variable Syntax

Environment variables are referenced using a placeholder syntax in parameter values:

```
${VARIABLE_NAME}
```

For example, if you have a variable `BASE_URL` set to `https://staging.example.com` in your Staging environment, a keyword parameter using `${BASE_URL}/api/login` will resolve to `https://staging.example.com/api/login` at runtime.

## Where Variables Can Be Used

- **Keyword step parameters** — Any input parameter in a flow's keyword step.
- **Flow-level parameters** — Default values for flow inputs.

## Best Practices

- Use **UPPER_SNAKE_CASE** for variable names (e.g., `API_KEY`, `BASE_URL`).
- Keep sensitive values (passwords, tokens) in environment variables rather than hardcoding them in flows.
- Document your expected variables so team members know what to configure in each environment.
