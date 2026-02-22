---
sidebar_position: 3
title: Keyword Instances
description: How to create and manage keyword instances with preset parameter values.
---

# Keyword Instances

Keyword instances are **preconfigured versions** of a keyword with specific parameter values filled in. They allow you to reuse the same keyword logic with different data without duplicating the keyword itself.

## Why Use Instances?

Suppose you have a keyword called `Navigate to URL`. Instead of manually entering the URL every time you use it in a flow, you can create instances like:

- `Navigate to Login Page` — URL preset to `/login`
- `Navigate to Dashboard` — URL preset to `/dashboard`

Each instance references the same underlying keyword but carries its own parameter values.

## Creating an Instance

1. Open a keyword and go to the **Instances** tab.
2. Click **Add Instance**.
3. Enter a descriptive name for the instance.
4. Fill in the parameter values you want to preset.
5. Save the instance.

## Using Instances in Flows

When adding a keyword step to a flow, you can choose to use a specific instance. The instance's preset values will be applied automatically, though you can still override them at the flow level.

## Managing Instances

- Instances are displayed in a grid view within the keyword's Instances tab.
- You can edit, duplicate, or delete instances from this view.
- Changing the parent keyword's parameters will be reflected in all its instances.
