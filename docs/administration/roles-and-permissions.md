---
sidebar_position: 2
title: Roles and Permissions
description: Understanding the role-based access control model in KeyCase.
---

# Roles and Permissions

KeyCase uses **role-based access control (RBAC)** at both the organization and project levels.

## Organization Roles

| Role | Description |
|---|---|
| **Owner** | Full control over the organization, including billing and deletion |
| **Admin** | Manage users, projects, agents, and organization settings |
| **Member** | Access projects they've been added to |

## Project Roles

| Role | Description |
|---|---|
| **Admin** | Full control within the project (members, settings, all resources) |
| **Editor** | Create and modify keywords, flows, executions, and environments |
| **Viewer** | Read-only access to all project resources |

## How Roles Interact

- Organization-level roles determine what administrative actions a user can perform.
- Project-level roles determine what a user can do within a specific project.
- A user must be a member of both the organization and the project to access project resources.

## Role Assignment

- Organization roles are assigned when inviting a user or from the user management page.
- Project roles are assigned when adding a member to a project.

## Permission Matrix

The full permission matrix covers actions like creating projects, managing agents, running executions, and viewing audit logs. Contact your organization administrator for a detailed breakdown specific to your instance.
