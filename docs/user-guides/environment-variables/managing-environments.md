---
sidebar_position: 1
title: Managing Environments
description: How to create and manage environments for different deployment targets.
---

# Managing Environments

Environments in KeyCase let you define different configurations for different targets — such as development, staging, and production.

## What Is an Environment?

An environment is a named collection of **key-value variables** that can be injected into your flows at execution time. This lets you run the same automation flow against different targets without modifying the flow itself.

## Creating an Environment

1. Navigate to **Environments** in the sidebar (within a project).
2. Click **Create Environment**.
3. Enter a name (e.g., `Staging`, `Production`, `QA`).
4. Add variables as key-value pairs.
5. Save the environment.

## Editing Variables

- Open an environment to see all its variables.
- Click on a variable to edit its key or value.
- Add new variables with the **Add Variable** button.
- Delete variables you no longer need.

## Environment Inheritance

Environments are scoped to a project. Each project manages its own set of environments independently.

## Security

- Variable values can contain sensitive data (API keys, passwords).
- Values are not included in project exports.
- Access to environment variables is controlled by project-level roles.
