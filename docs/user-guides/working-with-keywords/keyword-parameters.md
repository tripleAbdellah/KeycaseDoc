---
sidebar_position: 2
title: Keyword Parameters
description: How to define input and output parameters for keywords.
---

# Keyword Parameters

Parameters define what data a keyword accepts as input and what it produces as output.

## Parameter Types

KeyCase supports several parameter types:

| Type | Description |
|---|---|
| **String** | Text values |
| **Number** | Numeric values (integer or decimal) |
| **Boolean** | True/false values |
| **Object** | Structured JSON data |
| **Array** | Lists of values |

## Adding Parameters

1. Open a keyword and navigate to its **Parameters** tab.
2. Click **Add Parameter**.
3. Configure:
   - **Name** — The parameter identifier.
   - **Direction** — Input, Output, or Both.
   - **Type** — Select from the available types.
   - **Default value** — Optional default when no value is provided.
   - **Required** — Whether the parameter must be supplied.
4. Save the parameter.

## Input vs. Output Parameters

- **Input parameters** receive data when the keyword is called — either from a flow, an instance, or user input.
- **Output parameters** produce data that subsequent keyword steps in a flow can consume.

## Connecting Parameters in Flows

When a keyword is used within a flow, its parameters can be wired to other keywords' parameters. See [Connecting Parameters](/docs/user-guides/designing-flows/connecting-parameters) for details.
