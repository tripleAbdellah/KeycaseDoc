---
sidebar_position: 1
title: File Tree Organization
description: How to organize flows into folders using the file tree structure.
---

# File Tree Organization

KeyCase organizes flows in a **file-tree structure** — similar to how you organize files and folders on your computer or in a codebase.

## Structure

Within each project, flows are displayed in a tree hierarchy:

```
📁 Smoke Tests
   📄 Login Flow
   📄 Dashboard Flow
📁 Regression
   📁 User Management
      📄 Create User
      📄 Delete User
   📁 Settings
      📄 Update Profile
📄 Quick Sanity Check
```

## Creating Folders

1. In the **Flows** section, click the **New Folder** button.
2. Enter a folder name.
3. The folder appears in the tree and you can create flows inside it.

## Moving Flows

You can drag and drop flows between folders to reorganize your project structure. You can also right-click a flow to access move, rename, and delete actions.

## Best Practices

- **Group by feature or module** — Mirror your application's structure.
- **Use descriptive folder names** — e.g., `Authentication`, `Payments`, `Admin Panel`.
- **Keep nesting shallow** — Two or three levels deep is usually sufficient.
