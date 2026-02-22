---
sidebar_position: 2
title: Running Tests
description: How to trigger and monitor automation executions in KeyCase.
---

# Running Tests

Once you have an execution plan, you can trigger it to start running your automation flows.

## Triggering an Execution

1. Open an existing **Execution Plan** (or create a new one).
2. Click **Run**.
3. The execution is dispatched to the selected agent.
4. You're taken to the **Execution Detail** view to monitor progress.

## Monitoring Progress

While an execution is running, the detail view shows:

- **Overall status** — Running, Passed, or Failed.
- **Step progress** — Each keyword step's current state (pending, running, passed, failed, skipped).
- **Live output** — Real-time logs from the executing agent.

## Stopping an Execution

If you need to cancel a running execution:

1. Open the execution detail view.
2. Click **Stop** / **Cancel**.
3. The agent will halt execution and report partial results.

## Re-running

You can re-trigger the same execution plan at any time. Each run creates a new execution record with its own results.
