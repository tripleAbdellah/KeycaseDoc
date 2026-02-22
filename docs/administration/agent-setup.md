---
sidebar_position: 3
title: Agent Setup
description: How to install, configure, and register execution agents.
---

# Agent Setup

Agents are the execution runtimes that run your automation flows. This guide covers setting up and managing agents.

## Prerequisites

- A machine or container where the agent will run.
- Network access to the KeyCase server.
- An agent registration token (generated from the KeyCase admin panel).

## Registering an Agent

1. Navigate to **Administration > Agents**.
2. Click **Register Agent** to generate a registration token.
3. Copy the token — you'll need it to configure the agent.

## Installing the Agent

Follow the installation instructions for your platform:

```bash
# Example: download and start the agent
keycase-agent start --token <YOUR_TOKEN> --server <SERVER_URL>
```

Refer to the agent release notes for platform-specific installation steps.

## Agent Configuration

The agent can be configured with:

| Setting | Description |
|---|---|
| **Server URL** | The KeyCase server to connect to |
| **Token** | The registration token |
| **Name** | A human-readable name for this agent |
| **Tags** | Labels to categorize and target agents |

## Monitoring Agents

The **Agents** page in Administration shows all registered agents with their current status (Online, Busy, Offline), last activity time, and version information.

## Troubleshooting

- **Agent not connecting** — Verify network access and the server URL.
- **Agent offline** — Check that the agent process is running on the host machine.
- **Token expired** — Generate a new token from the admin panel.
