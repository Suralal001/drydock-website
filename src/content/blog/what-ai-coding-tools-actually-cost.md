---
title: "What AI coding tools actually cost your engineering org"
description: "Licence spend is the number most teams can quote. It is rarely the real number, and after the June 2026 Copilot billing change it is not even the stable one."
pubDate: 2026-08-06
authors: [suralal-s]
pillar: cost
answer: "Enterprise AI spend rose 108% year-on-year to roughly $1.2M on average, with 78% of IT leaders hitting unbudgeted charges. Around a third of Copilot licences sit unused, and most enterprises run three to five overlapping AI tools for the same job."
tags: ["AI cost", "GitHub Copilot", "engineering budget", "FinOps"]
faqs:
  - q: "How much do enterprises spend on AI coding tools?"
    a: "Enterprise AI spending rose 108% year-on-year in 2026 to an average of roughly $1.2 million per organisation. For engineering specifically, costs combine per-seat licences for tools like Copilot and Cursor with usage-based inference charges, which are far harder to forecast."
  - q: "Why did GitHub Copilot billing change in 2026?"
    a: "In June 2026 GitHub moved Copilot to usage-based AI Credits pooled at the billing-entity level rather than per seat. This broke per-team chargeback models that assumed a fixed per-seat cost, and produced large variance between light and heavy users."
  - q: "How do you track AI tooling cost per team?"
    a: "Attribute spend at the point of use rather than the point of purchase: map licences and usage events to teams or repositories, reconcile against actual activity to find idle seats, and identify overlapping tools serving the same use case."
---

Ask most engineering leaders what AI costs their organisation and you will get the licence number. It is the easy number: a line on an invoice, a seat count, a predictable monthly figure.

It is rarely the real number. And since June, it is not even a stable one.

## What changed in June 2026

GitHub moved Copilot to usage-based AI Credits, pooled at the billing-entity level rather than allocated per seat. The immediate consequence was not the headline price — it was that **the chargeback model most enterprises had built quietly stopped working**.

If your finance team was allocating Copilot cost to departments by multiplying seats by a fixed rate, that calculation no longer maps to anything. Consumption varies enormously between a developer using inline completion occasionally and one running agentic workflows all day. Reports of individual developers moving from $29 a month to several hundred are not billing errors. They are the model working as designed.

## The three costs nobody separates

Most organisations track one line where there are really three:

| Cost | How it behaves | Typical visibility |
| --- | --- | --- |
| Licences | Fixed, predictable, per seat | Good — it is on the invoice |
| Usage / inference | Variable, spiky, tied to agentic workloads | Poor — pooled and unattributed |
| Waste | Idle seats and overlapping tools | Almost none |

The third line is usually the largest and the least examined. Roughly a third of Copilot licences sit unused in the average deployment. Most enterprises run three to five overlapping AI tools covering the same use case, because adoption happened team by team rather than centrally.

## Why engineering of all functions should find this uncomfortable

This is the part that should sting.

Engineering is the most heavily instrumented function in most companies. We track deploy frequency, lead time for changes, change failure rate, mean time to recovery. We measure p95 latency to the millisecond. We will spend an hour of a planning meeting arguing about an error budget.

And we cannot answer: **what did AI cost us to ship that feature?**

We adopted AI as a productivity tool and never subjected it to the financial discipline we apply to infrastructure. No unit economics. No cost per team. No chargeback that survives a vendor changing its pricing model.

## The questions worth being able to answer

Before the next budget cycle, a leadership team should be able to answer all four:

1. **What is our total AI spend across engineering** — licences plus usage, across every vendor, including tools bought on team cards?
2. **What proportion of purchased seats were actively used last month?** Idle-seat cleanup alone typically recovers 20–35% of tool cost.
3. **Where do we have overlap?** Two tools doing the same job for different teams is a decision nobody made.
4. **What does it cost per team, per repository, or per unit of output?** Without this, "is AI worth it" is a matter of opinion.

## The reckoning is not about price

The uncomfortable prediction for the next twelve months is not that AI tooling turns out to be too expensive. Most of it is cheap relative to engineering salaries, and the productivity gains are real — Gartner puts the net average gain at 19.3%.

The problem is that when finance eventually asks for justification, most engineering organisations will not be able to produce it. Not because the value is not there, but because nobody instrumented it well enough to demonstrate it.

That is a governance failure rather than a cost failure. And it is fixable — but not retroactively.
