---
sidebar_position: 4
title: Audit Logs
description: How to view and use audit logs for tracking activity in KeyCase.
---

# Audit Logs

KeyCase records an audit trail of important actions performed within your organization.

## What Is Logged

Audit logs capture:

- **User actions** — Sign-in events, project creation, member changes.
- **Resource changes** — Keyword, flow, and environment modifications.
- **Execution events** — Execution starts, completions, and failures.
- **Administrative actions** — Role changes, agent registration, organization settings updates.

## Viewing Audit Logs

1. Navigate to **Administration > Audit Logs**.
2. Browse the chronological list of events.
3. Use filters to narrow results by:
   - **User** — Who performed the action.
   - **Action type** — What kind of action was taken.
   - **Date range** — When the action occurred.
   - **Resource** — Which resource was affected.

## Log Entry Details

Each log entry includes:

| Field | Description |
|---|---|
| **Timestamp** | When the action occurred |
| **User** | Who performed the action |
| **Action** | What was done (e.g., `project.created`, `execution.started`) |
| **Resource** | The affected resource and its identifier |
| **Details** | Additional context (e.g., changed fields, before/after values) |

## Retention

Audit log retention policies depend on your organization's configuration. Contact your administrator for details on how long logs are kept.
