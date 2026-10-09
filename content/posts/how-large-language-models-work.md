---
title: How Large Language Models Work, in Plain English
seoTitle: How Large Language Models (LLMs) Work | Zunex
description: What an LLM is, how it predicts text, why it sometimes makes things up and how techniques like RAG help. A clear guide with no maths.
keyword: how do LLMs work
category: AI
kind: guide
date: 2026-10-08
sources:
- Attention Is All You Need (the original transformer paper) | https://arxiv.org/abs/1706.03762
---

A large language model, or LLM, is software trained to predict the next piece of text. That sounds modest, yet doing it well across billions of examples gives it surprising abilities: answering questions, summarising, translating and writing code.

## Tokens, not words

Models read text as tokens, small chunks that can be a word, part of a word or punctuation. Everything a model does is choosing the next token, then the next, until it finishes. That is why long answers are billed and limited by tokens.

## What a transformer does

Most modern models use the transformer design introduced in 2017. Its key idea, attention, lets the model weigh which earlier words matter most for the word it is about to produce. It is how the model keeps track of who is who in a long paragraph.

## Training versus using it

Training is the expensive part. The model sees huge amounts of text and adjusts its internal numbers to get better at prediction. Using it, called inference, just applies those fixed numbers to your prompt. The model does not learn from your chat unless the provider sets that up separately.

## Why models make things up

The model produces likely-sounding text, not verified facts. When it lacks information it can still produce a confident, wrong answer. This is often called a hallucination. Treat outputs about names, numbers, laws and citations as drafts to check.

## Tools that improve reliability

- Better prompts: clear instructions, examples and a defined format.
- Retrieval (RAG): fetch your own documents first and ask the model to answer only from them.
- Tools: let the model call a calculator, database or API instead of guessing.
- Human review for anything important.

## Context windows

A model can only consider a limited amount of text at once, called its context window. Very long inputs may be handled less reliably, so send what matters.

## What this means for your business

Knowing these limits helps you use AI well: give it narrow jobs, feed it your real data and keep a person in the loop. That is how we design AI features for clients.
