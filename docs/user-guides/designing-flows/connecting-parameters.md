---
sidebar_position: 3
title: Connecting Parameters
description: How to wire data between keyword steps in a flow.
---

# Connecting Parameters

Parameter connections are what make flows powerful — they let you pass data from one keyword step to the next.

## How Connections Work

When a keyword step produces an **output parameter**, that value becomes available as an input to any subsequent step in the flow. For example:

1. Step 1: `Fetch User` → outputs `userId`
2. Step 2: `Open Profile` → input `userId` connected to Step 1's output

## Creating a Connection

1. In the flow designer, select a keyword step.
2. Open the **parameter configuration** for that step.
3. For an input parameter, instead of entering a static value, select **Connect to previous output**.
4. Choose the source step and output parameter.
5. The connection is visualized in the flow designer.

## Connection Rules

- You can only connect to **outputs from earlier steps** in the sequence.
- Parameter types should be compatible (e.g., connecting a String output to a String input).
- A single output can be connected to multiple inputs across different steps.

## Flow-Level Parameters

Flows can also define their own input parameters. These act as top-level inputs that you provide when creating an execution plan, and they can be connected to any keyword step's inputs within the flow.
