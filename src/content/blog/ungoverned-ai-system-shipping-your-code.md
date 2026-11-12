---
title: "The most ungoverned AI system in your company ships your code"
description: "Enterprises design careful oversight for AI agents that read contracts, then let AI-written code reach production behind an approval that is just a name in a field."
pubDate: 2026-08-12
authors: [suralal-s]
pillar: governance
answer: "Most enterprises apply human-in-the-loop patterns to business-process agents but not to their delivery pipeline, where AI now writes or assists 61% of code. The result is a release approval that records a name without verifying that any check was run."
tags: ["AI governance", "human in the loop", "software delivery", "approval gates"]
faqs:
  - q: "What is human-in-the-loop in software delivery?"
    a: "Human-in-the-loop in software delivery means defining structured checkpoints where a person must review, approve or override an automated action before it reaches production. Unlike a review step that records that someone clicked approve, an effective loop blocks the action until named human authority is exercised against assembled evidence."
  - q: "Why is AI-generated code harder to govern than human-written code?"
    a: "Volume and attribution. AI raises change throughput far beyond what manual review can absorb, and most pipelines do not record which changes were machine-authored. Governance designed for twenty changes a week degrades quietly when a team ships hundreds."
  - q: "Does adding approval gates slow down delivery?"
    a: "Not if gates are risk-routed. Teams that clear routine changes automatically and escalate only high-risk paths reduce total approval load while increasing the depth of review where it matters."
---

Every serious enterprise AI deployment now arrives with an oversight design. Agents that answer support tickets get approval flows. Agents that read contracts get escalation paths. Someone has sat down and thought carefully about the moment a human steps in.

Then there is the pipeline that puts software in front of customers, where AI now writes or assists **61% of the average enterprise codebase** — and most teams cannot tell you which of those changes a person actually reviewed.

## The five patterns, and where they get applied

The enterprise architecture literature has converged on a reasonably stable set of human-in-the-loop patterns:

| Pattern | What it does | Typical use |
| --- | --- | --- |
| Approval gate | Blocks the action until a human clears it | Irreversible or high-cost actions |
| Clarification request | Agent pauses mid-task to resolve ambiguity | Multi-step work where early errors compound |
| Escalation | Tiered handoff on a confidence or policy threshold | High-volume operations with a risky tail |
| Feedback loop | Human corrections improve later decisions | Domains that need to improve with real data |
| Shared control | Human and agent operate in tandem | Complex work where human expertise is the differentiator |

The patterns are sound. The problem is where they get used. Almost every published example is a business process — know-your-customer checks, claims processing, medical triage, customer service.

Which is fine. Except.

## If an email needs an approval gate, what about a deploy?

If we accept that an agent sending a customer email needs a human approval gate, what exactly is the argument for an agent deploying to production not having one?

Because in most organisations, approval on a release looks like this:

- The approver is **a name in a field** on a ticket.
- Nobody verifies whether that person read anything before typing their name.
- Nothing in the system prevents the deploy if they did not.
- The rollback plan exists as a paragraph, and has never been executed.

That is not an approval gate. It is an honour system with a paper trail.

## Why it held up until recently

None of this was negligence. It worked.

When a team shipped twenty changes a week and humans wrote all of them, the approver had usually seen the code in review, knew the service, and could hold the change in their head. The Word document describing the process was a reasonable summary of what genuinely happened.

The document did not get worse. **The volume outran it.**

Teams now ship hundreds of changes in the same period, a large share machine-authored, and the same approval ritual is being asked to carry vastly more weight than it was designed for. It does not fail loudly. It degrades — into faster clicks and shallower attention — and you discover the degradation during an incident or an audit, which are the two most expensive moments to discover anything.

## Delivery is an agentic system, and should be architected like one

Here is the reframe worth sitting with: we treat delivery as the pipeline that *carries* the work, rather than as a system that *makes decisions*. So it never receives the architecture we would insist on for anything else.

Applied properly to a release pipeline, the patterns look concrete:

- **Approval gate** — a named approver on the deploy itself, with the change summary, risk assessment and test results assembled before they are asked. No owner, no ship.
- **Escalation** — routine changes clear automatically; changes touching payments, authentication or customer data route to a person.
- **Clarification** — the workflow stops when a change has no rollback plan, rather than discovering that at 2am.
- **Feedback loop** — every override teaches the policy. If a human repeatedly approves the same "high-risk" change, the risk model is wrong, not the human.
- **Shared control** — the engineer stays on the system throughout.

## The teams that will come out of this well

Not the ones with the best coding agents. Coding agents are becoming a commodity and the gap between the good ones is closing every quarter.

The teams that come out of the next two years well will be the ones that worked out **where the human belongs** — deliberately, in advance — before an incident worked it out for them.

*With credit to Chandrakumar R Pillai, whose treatment of human-in-the-loop patterns in* Enterprise AI Architect *prompted this piece.*
