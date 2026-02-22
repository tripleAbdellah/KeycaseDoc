---
sidebar_position: 4
title: Executions
description: Understand executions — running, monitoring, and reviewing automation results.
---

# Executions

Executions represent **individual runs** of your automation flows. They capture everything that happened during a run — from start to finish.

## What Is an Execution?

An execution is created when you trigger a flow to run. It tracks:

- Which flow was executed.
- Which agent ran it.
- The status of each keyword step (passed, failed, skipped).
- Timing information and any output data.

## Execution Lifecycle

1. **Planned** — An execution plan is created specifying which flows and parameters to use.
2. **Running** — The execution is dispatched to an agent and keyword steps execute in order.
3. **Completed** — All steps have finished. The execution is marked as passed or failed based on results.

## Execution Results

After an execution completes, you can review:

- **Step-by-step results** — See the outcome of each keyword in the flow.
- **Logs and output** — Detailed output from each step.
- **Timing** — How long each step and the overall execution took.

## Next Steps

- [Execution Plans](/docs/user-guides/running-executions/execution-plans) — How to create and configure execution plans.
- [Running Tests](/docs/user-guides/running-executions/running-tests) — Triggering and monitoring executions.
- [Viewing Results](/docs/user-guides/running-executions/viewing-results) — Analyzing execution outcomes.
