---
title: "How to prove your release process was actually followed"
description: "If producing evidence for your last ten deploys takes days of reading tickets and screenshotting dashboards, the process is a description rather than a control."
pubDate: 2026-06-18
authors: [suralal-s]
pillar: governance
answer: "Change management evidence should be generated as a by-product of execution rather than reconstructed afterwards. If proving a process ran requires manual archaeology through tickets and dashboards, what you produce is a reconstruction, not a record."
tags: ["SOC 2", "audit evidence", "change management", "compliance"]
faqs:
  - q: "What evidence do auditors want for change management?"
    a: "Auditors typically want to see that changes were authorised by someone with appropriate authority, that required testing occurred before release, that production changes were traceable to an approved request, and that segregation of duties was maintained. They assess the evidence produced, not the policy document describing intent."
  - q: "What is the difference between a documented and an enforced process?"
    a: "A documented process describes what should happen and can be skipped silently. An enforced process cannot proceed without each step completing. An evidenced process additionally produces proof that each step completed, without anyone assembling that proof later."
  - q: "How long should change management evidence be retained?"
    a: "Retention depends on the framework and contractual commitments, but SOC 2 audits typically examine a period of six to twelve months, so evidence must be complete and retrievable across the full audit window rather than gathered at the end."
---

There is a diagnostic that takes about ten seconds to administer, and it tells you almost everything about the maturity of your delivery governance.

> If someone asked you to prove your release process was followed on your last ten deploys — how long would it take you to produce that?

If the answer is measured in days, and involves an engineer reading tickets and screenshotting dashboards, then what you have is not a control. It is a description, and the evidence you eventually hand over is an artifact you constructed after the fact.

That is a meaningfully different thing from a record, and auditors know the difference.

## Three levels, commonly conflated

| Level | Property | Failure mode |
| --- | --- | --- |
| Documented | Describes what should happen | Skipped silently under deadline pressure |
| Enforced | Cannot proceed without completing | Becomes a rubber stamp if uninformed |
| Evidenced | Produces proof it completed | — |

Most enterprise release processes sit firmly at level one. Compliance frameworks assume level three. The distance between those two is where audit findings come from, and it is also where incidents hide.

Worth noting: enforcement alone is not the answer. Making an empty step mandatory produces a record showing someone approved, which is precisely what you would want if the goal were to *look* governed rather than *be* governed. Enforcement without evidence manufactures the appearance of accountability.

## Why reconstruction fails

When evidence is assembled retrospectively, three problems appear reliably.

**It is incomplete.** The check that ran locally and passed left no trace. The conversation where someone decided a step was unnecessary happened in a direct message.

**It is unverifiable.** A screenshot of a dashboard proves someone took a screenshot. It does not prove the state at the moment of release.

**It is expensive.** Engineers who should be building spend a fortnight per audit cycle doing archaeology. That cost recurs every period, forever, and grows with volume.

## What good evidence contains

For each change reaching production, four things:

1. **Authorisation** — who approved, when, and what they were shown. An approver's name without the evidence they reviewed is a signature on a blank page.
2. **Verification** — which checks ran, their results, and the timestamp. Not "tests were run" but which suite, which commit, what outcome.
3. **Traceability** — the deployed artifact linked to the approved request. Build identity is the link auditors most often ask for and teams most often lack.
4. **Post-release validation** — what was checked afterwards, against what threshold, and what happened if it breached.

The unifying property is that all four are captured *at the moment they occur*, by the system doing the work, rather than described afterwards by a person trying to remember.

## Evidence as a by-product

The shift that matters is treating the audit trail as something delivery emits rather than something a team produces.

When each stage records its own owner, checks, results and approvals as it executes, proving compliance costs approximately nothing — because the proof was generated while the work was happening. The quarterly evidence exercise stops being a project and becomes an export.

That is also why the same mechanism serves two audiences who rarely talk to each other. The auditor wants proof the process ran. The engineering leader wants to know which releases skipped a step and why. Both questions are answered by the same record, and neither can be answered by a document describing intent.

## Where to start

You do not need to instrument everything. Start with the single process that hurts most — for most organisations that is production change — and make one property true: **every release produces a record of who authorised it and what checks had passed at that moment.**

That one change converts your most-audited process from a description into a control, and it makes the next process cheaper to do, because the connections are already in place.
