---
sidebar_position: 3
title: Agents
description: Understand agents — the execution runtimes that run your automation flows.
---

# Agents

Agents are **execution runtimes** that carry out your automation flows on target environments.

## What Is an Agent?

An agent is a process that connects to the KeyCase platform, receives flow execution instructions, and runs them. Agents can be deployed on different machines or environments depending on your automation needs.

## How Agents Work

1. An agent registers with the KeyCase server and reports its availability.
2. When an execution is triggered, the server dispatches the flow to an available agent.
3. The agent executes each keyword step in the flow and reports results back to the server.
4. Results are aggregated and displayed in the Executions view.

## Agent Status

Each agent reports its current status:

| Status | Meaning |
|---|---|
| **Online** | Connected and ready to accept work |
| **Busy** | Currently executing a flow |
| **Offline** | Not connected to the server |

## Next Steps

- [Agent Setup](/docs/administration/agent-setup) — How to install, configure, and register an agent.
