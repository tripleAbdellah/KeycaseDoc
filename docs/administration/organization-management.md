---
sidebar_position: 5
title: Organization Management
description: How to manage your KeyCase organization settings and structure.
---

# Organization Management

Organizations are the top-level entity in KeyCase. They contain users, projects, and shared resources like agents.

## Organization Settings

Navigate to **Administration > Organization** to manage:

- **Name** — The display name of your organization.
- **Description** — A brief summary visible to members.

## Multi-Tenant Structure

KeyCase supports multiple organizations on a single instance. Each organization is fully isolated:

- Users can belong to multiple organizations.
- Projects, keywords, flows, and executions are scoped to a single organization.
- Agents can be shared or dedicated per organization, depending on configuration.

## Switching Organizations

If you belong to multiple organizations:

1. Click the **organization selector** in the sidebar or top bar.
2. Choose the organization you want to work in.
3. The interface updates to show that organization's projects and resources.

## Creating an Organization

Depending on your instance configuration, you may be able to create new organizations from the main menu. Contact your instance administrator if this option is not available.

## Deleting an Organization

Only organization owners can delete an organization. This action is irreversible and removes all associated projects, data, and member associations.
