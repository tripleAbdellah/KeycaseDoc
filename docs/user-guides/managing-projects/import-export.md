---
sidebar_position: 3
title: Import & Export
description: How to import and export project data in KeyCase.
---

# Import & Export

KeyCase allows you to export project data for backup or transfer, and import it into another project or instance.

## Exporting a Project

1. Navigate to **Settings > Import/Export** within the project.
2. Click **Export**.
3. Choose what to include (keywords, flows, environments).
4. Download the export file.

The export produces a structured file containing all selected project resources.

## Importing into a Project

1. Navigate to **Settings > Import/Export** within the target project.
2. Click **Import**.
3. Select the export file from your computer.
4. Review the import preview to see what will be created or updated.
5. Confirm the import.

## Important Notes

- Importing will **not** overwrite existing resources unless they share the same identifier.
- Environment variable **values** are excluded from exports for security reasons. You'll need to re-enter them after import.
- Member assignments are not included in exports — you'll need to add members separately.
