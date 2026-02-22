---
sidebar_position: 1
title: Keywords
description: Understand keywords — the reusable building blocks of automation in KeyCase.
---

# Keywords

Keywords are the **fundamental building blocks** of automation in KeyCase. Each keyword represents a single, reusable action or test step.

## What Is a Keyword?

A keyword encapsulates a discrete piece of logic — for example, "Open Browser", "Click Element", or "Verify Response Code". Keywords can be:

- **Built-in** — Provided by KeyCase or installed agent libraries.
- **User-defined** — Created by your team to represent custom actions.

## Keyword Structure

Every keyword has:

| Property | Description |
|---|---|
| **Name** | A descriptive identifier (e.g., `Login With Credentials`) |
| **Parameters** | Input and output values the keyword accepts and produces |
| **Instances** | Concrete configurations of a keyword with specific parameter values |

## How Keywords Relate to Flows

Keywords are composed into [Flows](/docs/core-concepts/flows) to create end-to-end automation sequences. A flow is essentially a series of keyword calls wired together through their parameters.

## Next Steps

- [Creating Keywords](/docs/user-guides/working-with-keywords/creating-keywords) — Step-by-step guide to creating your first keyword.
- [Keyword Parameters](/docs/user-guides/working-with-keywords/keyword-parameters) — How to define inputs and outputs.
- [Keyword Instances](/docs/user-guides/working-with-keywords/keyword-instances) — Working with reusable keyword configurations.
