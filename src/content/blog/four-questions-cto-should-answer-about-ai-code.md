---
title: "Four questions every CTO should answer about AI code"
description: "Boards have started asking how AI-written software reaches production. Most engineering orgs cannot answer these four questions without a week of prep."
pubDate: 2026-08-14
authors: [suralal-s]
pillar: insight
answer: "A CTO should be able to state what share of production code is AI-authored, which changes a human reviewed, who authorised the last high-risk release, and what AI tooling costs per team. Most organisations cannot answer any of them on demand."
tags: ["engineering leadership", "board reporting", "AI governance", "metrics"]
faqs:
  - q: "What should a board ask about AI in software development?"
    a: "Useful board questions focus on accountability rather than technology: what proportion of code is AI-authored, how changes are reviewed and by whom, who holds authority to approve high-risk releases, and what the tooling costs relative to measured benefit."
  - q: "How do you measure the impact of AI on software delivery?"
    a: "Combine throughput measures such as change volume and lead time with quality measures such as change failure rate and incident frequency, then attribute both to AI-authored versus human-authored changes. Measuring throughput alone will show improvement even when quality is degrading."
  - q: "Should engineering report AI metrics to the board?"
    a: "Yes, but framed as risk and return rather than activity. Boards are accountable for oversight of material risks, and AI-authored code entering production without recorded human review is a material risk that is straightforward to describe and currently hard to evidence."
---

Board-level interest in AI has moved past strategy decks. The questions being asked now are operational, and they land on the CTO.

None of the four below are unfair. All four should be answerable in about a minute. In most organisations, each one currently triggers a week of preparation.

## 1. What proportion of our production code is AI-authored?

Industry figures put AI at **61% of the average enterprise codebase** — generated or assisted. That is a useful benchmark and a poor substitute for your own number.

The reason this question is hard is attribution. Most pipelines do not tag machine-authored changes at commit time, so the honest answer is usually a shrug and an estimate. That matters more than it appears, because every subsequent question depends on it. You cannot report differently on AI-authored code if you cannot identify it.

**What good looks like:** AI-assisted changes tagged at commit time, with untagged bulk changes treated as AI-authored by default.

## 2. Which of those changes did a human actually review?

Not "what is our review policy." Which changes, specifically, had human judgment applied.

This is where most organisations discover that approval is a name in a ticket field. The record shows someone clicked approve. It does not show what they saw, whether required checks had passed at that moment, or whether they held authority for that class of change.

At twenty changes a week, informal review worked because the approver genuinely knew the code. At several hundred, the same ritual carries far more weight than it was designed for and thins out quietly.

**What good looks like:** risk-routed review, where routine changes clear automatically with evidence logged and high-risk paths require a named approver who is shown the evidence before being asked.

## 3. Who authorised our last high-risk release, and on what basis?

The board version of this question is about accountability. If something went wrong, who owns the consequence?

Answering requires two things most organisations lack. First, a definition of who holds authority for which class of change — decided in advance, not assumed. Ask who determined that a particular role approves a particular kind of release and you frequently get "it has always been that way," which means the authority is assumed rather than conferred.

Second, a record of the decision that includes the evidence. An approval you cannot reconstruct is not accountability, it is paperwork.

**What good looks like:** named approvers per risk class, defined deliberately, with each decision recorded alongside what was reviewed.

## 4. What is AI costing us, and against what return?

Enterprise AI spend rose **108% year-on-year** to roughly $1.2M on average, and **78% of IT leaders** reported charges they had not budgeted for. Around a third of Copilot licences sit unused in a typical deployment.

Most engineering organisations can quote the licence figure and nothing else. Usage-based inference costs are pooled and unattributed. Overlapping tools bought team by team are invisible. The measured return — Gartner puts the net productivity gain at 19.3% — is rarely tied back to the spend that produced it.

**What good looks like:** total spend across licences and usage, attributed to teams, reconciled against actual utilisation, and reported next to a delivery outcome.

## The pattern underneath

These are four different questions with one root cause.

We instrumented systems thoroughly and decisions barely at all. We can describe production behaviour in extraordinary detail and cannot describe who decided what, on what evidence, with what authority.

That was survivable when humans wrote everything and volume was human-scale. It is not survivable when machines write most of it and volume is machine-scale — not because the code is worse, but because the compensating control was always a person holding context in their head, and that control does not scale.

The organisations that will answer these questions comfortably in twelve months are not the ones with the best AI tooling. They are the ones that decided, deliberately and in advance, where human judgment belongs — and then recorded it.
