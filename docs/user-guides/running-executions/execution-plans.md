---
sidebar_position: 1
title: Execution Plans
description: How to create execution plans that define what to run and how.
---

# Execution Plans

An execution plan defines **what flows to run**, with **which parameters**, and on **which agent**. Plans are the starting point for every execution.

## Creating an Execution Plan

1. Navigate to **Executions** in the sidebar.
2. Click **New Execution Plan**.
3. Configure the plan:
   - **Name** — A descriptive label for this plan.
   - **Flows** — Select one or more flows to include.
   - **Environment** — Choose the target environment (determines variable values).
   - **Agent** — Select which agent should run the execution.
4. For each flow, supply any required **flow-level parameters**.
5. Save the plan.

## Plan Configuration

| Setting | Description |
|---|---|
| **Flows** | Which flows are included in this execution |
| **Environment** | The environment whose variables will be injected |
| **Agent** | The execution runtime to dispatch to |
| **Parameters** | Values for flow-level input parameters |

## Reusing Plans

Saved execution plans can be triggered multiple times. This is useful for regression testing — define the plan once, then re-run it as needed.
