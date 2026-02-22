---
sidebar_position: 2
title: Flows
description: Understand flows — visual automation sequences composed of keywords.
---

# Flows

Flows are **visual automation sequences** that chain keywords together into complete processes or test cases.

## What Is a Flow?

A flow defines the order in which keywords execute and how data passes between them. Think of a flow as a blueprint for an automation run — it describes *what* to do and in *what order*.

## Flow Structure

Flows are organized in a **file-tree structure** within each project, allowing you to group related flows into folders — similar to organizing test files in a codebase.

Each flow contains:

- **Keyword steps** — References to keywords, arranged in sequence.
- **Parameter connections** — Data wiring between keyword outputs and inputs.
- **Flow-level parameters** — Inputs that the flow itself accepts, passed down to its keyword steps.

## Visual Designer

KeyCase provides a visual flow designer where you can:

- Drag and drop keywords into a flow.
- Connect parameters between steps.
- Reorder and nest steps as needed.

## Next Steps

- [File Tree Organization](/docs/user-guides/designing-flows/file-tree-organization) — Organizing flows within a project.
- [Building a Flow](/docs/user-guides/designing-flows/building-a-flow) — Step-by-step guide to creating a flow.
- [Connecting Parameters](/docs/user-guides/designing-flows/connecting-parameters) — Wiring data between keyword steps.
