---
title: Build an AI Lead Follow-Up Workflow in n8n, Step by Step
seoTitle: n8n AI Lead Follow-Up Workflow Guide | Zunex
description: Design an n8n workflow that reads new leads, classifies them with AI, drafts a reply for approval and logs everything. Steps, guardrails and tests.
keyword: n8n AI agent workflow
category: n8n
kind: guide
date: 2026-10-08
sources:
- n8n documentation | https://docs.n8n.io/
---

Slow follow-up loses leads. This guide outlines an n8n workflow that reads each new enquiry, works out how serious it is and prepares a reply, while keeping a person in charge of what gets sent.

## The flow at a glance

Contact form, then Webhook, then clean the data, then AI classification, then branch by priority, then draft a reply, then human approval, then send and log.

## Step by step

1. Trigger. Point your website form at an n8n Webhook node. Return a quick success response so the visitor is not left waiting.
2. Clean. Use Edit Fields to keep name, email, company, budget and message, and trim whitespace.
3. Classify. Send the message to an AI node with clear instructions: label it as quote request, support, partnership or spam, and rate urgency from 1 to 3. Ask for structured output so later nodes can read it.
4. Branch. An IF node sends high-urgency leads to an instant alert on your phone.
5. Draft. A second AI step writes a short, polite reply using only facts you provide, such as services and opening hours.
6. Approve. Post the draft to a chat channel or email with approve and edit options. Nothing goes to the customer yet.
7. Send and log. After approval, send the email and add a row to your sheet or CRM.

## Guardrails that matter

- Tell the model never to invent prices, dates or promises.
- Keep the prompt and the facts in one place so they are easy to update.
- Handle failures: if the AI step errors, still log the lead and alert you.
- Mind privacy. Only send the data the model needs.

## Testing

Run twenty real past enquiries through it, including rude ones, foreign-language ones and spam. Fix what breaks before going live.

## What this means for your business

Done well, this saves hours a week and means no lead waits overnight. We build versions of it for clients, tuned to their tone and tools.
