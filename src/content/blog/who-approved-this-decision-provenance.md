---
title: "Who approved this? The missing layer in AI-era delivery"
description: "We built extraordinary observability for systems and almost none for decisions. You can replay a request from six weeks ago, but not a judgment from Friday."
pubDate: 2026-07-31
authors: [suralal-s]
pillar: risk
answer: "Decision provenance is the record of who authorised a change, when, and on what evidence. Most engineering organisations can reconstruct exactly what a system did during an incident but cannot reconstruct who decided the change was safe to ship."
tags: ["incident review", "accountability", "audit trail", "decision provenance"]
faqs:
  - q: "What is decision provenance?"
    a: "Decision provenance is the recorded chain of who made a decision, when they made it, what evidence was in front of them, and what authority they held. In software delivery it answers who approved a change and on what basis, as distinct from observability, which answers what the system subsequently did."
  - q: "Why can't most teams identify who approved a change?"
    a: "Because approval is typically captured as a name in a ticket field rather than as a decision bound to evidence. The record shows that someone clicked approve, not what they reviewed, whether required checks had passed, or whether they held authority for that class of change."
  - q: "Who is accountable when AI-written code causes an incident?"
    a: "Accountability sits with the human who authorised the change into production, provided the organisation defined in advance who holds that authority. Where no such definition exists, accountability is genuinely ambiguous, which is the underlying governance failure rather than an AI problem."
---

You know the meeting. The change went out Friday afternoon. Production degraded on Sunday night. Monday morning, everyone is in a room.

Reconstructing *what happened* is straightforward. The logs are there. The traces are there. Someone builds a timeline accurate to the second, and within an hour the room understands the failure mode precisely.

Reconstructing *who decided it was safe* is not straightforward at all.

## The pattern that repeats

It goes roughly like this. The ticket says approved. The named approver does not remember reviewing it — they cleared eleven that day. There was a check that would have caught this, and no record of whether anyone ran it or decided it was unnecessary.

Then someone mentions the change was largely AI-authored, and the conversation stalls, because now nobody is confident where accountability sits at all.

None of the individuals behaved badly. The system simply never recorded the thing that mattered.

## Observability solved half the problem

Over fifteen years the industry got extremely good at understanding systems. Distributed tracing, structured logging, high-cardinality metrics, continuous profiling. We can answer questions about production behaviour that would have seemed fantastical in 2010.

We built almost nothing equivalent for decisions.

- We know exactly which service returned the 500.
- We have no idea who looked at the change and judged it low-risk.
- We can replay the request.
- We cannot replay the judgment.

## Why "approved" usually means nothing

The word approved carries enormous implied weight and almost no actual information. In most systems it records that a human clicked a control. It does not record:

- **What they saw.** Was the risk assessment attached, or did they have to go and find it?
- **What had passed.** Were the required checks green at the moment of approval, or did they run afterwards?
- **What authority they held.** Was this person designated as an approver for this class of change, or simply available?
- **What they were comparing against.** Was there a defined standard, or personal judgment?

An approval that cannot answer those questions is a signature on a blank page.

## AI did not create this problem, but it broke the workaround

For a long time the informal version worked. At twenty changes a week, the approver had usually reviewed the code, knew the service, and could hold the risk in their head. The record was thin, but the judgment underneath it was real.

That compensating control does not survive volume. At several hundred changes a week, with a large share machine-authored, the same approval ritual is being asked to carry weight it was never designed for. It does not fail visibly. It thins out.

## What decision provenance actually requires

Four properties, none of which are exotic:

1. **Evidence assembled before the ask.** The person deciding sees the change, its risk classification, test results and rollback plan without going to find them. Most approvals fail here — people are asked to decide before anything has been assembled for them to decide on. They are uninformed, not unenforced.
2. **Authority defined in advance.** Someone determined, previously and deliberately, who approves this class of change. If you ask who conferred that authority and get "it has always been that way", the authority is assumed rather than granted, which is exactly why it does not hold under scrutiny.
3. **The gate closes on conditions, not clicks.** A decision that can be made without the required evidence present is not a control.
4. **An immutable record.** Who, when, what evidence, what outcome — captured as it happens rather than reconstructed afterwards.

## The test

Take your most recent significant incident. Two questions:

> Can you name the person who approved the change?
>
> Can you produce what they were looking at when they approved it?

Most organisations can answer the first, sometimes. Very few can answer the second at all.

The next stage of engineering maturity is not better monitoring. It is knowing who authorised what, and on what basis — recorded at the moment it happened, because it cannot be recovered later.
