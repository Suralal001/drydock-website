---
title: "Your production release process is a Word document"
description: "Most engineering teams cannot say which release processes were actually followed last quarter. Not because they are careless, but because nothing ever records it."
pubDate: 2026-07-22
authors: [suralal-s]
pillar: governance
answer: "A release process that lives in a document is a description of intent, not an enforceable control. If nothing records whether each step ran, the gap between the process you would describe to an auditor and the one that actually executed is unmeasured risk."
tags: ["change management", "release process", "audit evidence", "SOC 2"]
faqs:
  - q: "What is change management evidence?"
    a: "Change management evidence is the recorded proof that a defined release process was followed for a specific change: who approved it, which checks ran and passed, what was deployed, and what verification occurred afterwards. Auditors assess the evidence, not the policy document."
  - q: "Why do documented release processes fail?"
    a: "Because documentation describes intent while nothing enforces or records execution. Under deadline pressure, steps are skipped, and no system captures the omission — so process drift is invisible until an incident or audit exposes it."
  - q: "How do you prove a release process was followed?"
    a: "By generating evidence as a by-product of execution rather than reconstructing it afterwards. Each stage records its owner, the checks that ran, their results and the approval given, producing an immutable trail that can be exported on demand."
---

Every organisation has a set of processes that decide whether software is safe to ship. Production change. Readiness review. Access change. Incident response.

Ask where they actually live and the answer is usually some combination of a Confluence page last edited fourteen months ago, a document attached to an old ticket, and the memory of one senior engineer.

They get followed when people remember. They get skipped when there is a deadline. And nothing, anywhere, records which of those two things happened.

## The question almost nobody can answer

Which of your processes were actually followed last quarter?

Not *should have been*. Not *we have a policy*. **Were.**

Almost no engineering leader can answer that, and it is not because their teams are careless. It is because the process was never something that could be measured. It was a description of good intentions, written once, and then asked to govern thousands of subsequent decisions it never saw.

## Documents describe, systems enforce

There is a category error at the heart of this. A document can describe a process. Only a system can enforce one — and only a system can record that the process ran.

The distinction matters most in the places where it is most often ignored:

- A step that is **documented** can be skipped silently.
- A step that is **enforced** cannot proceed without completing.
- A step that is **evidenced** produces proof it completed, without anyone assembling that proof later.

Most enterprise release processes achieve the first. Compliance frameworks assume the third.

## What changed

Run the standard release runbook through the last two years.

These documents were written when a team shipped twenty changes a week and humans wrote every line. Plenty of teams now ship hundreds, with AI authoring a substantial share.

The document did not get worse. The volume outran it.

At twenty changes a week, an approver holds real context. At three hundred, the same person is pattern-matching on commit titles. The ritual is unchanged; the meaning has quietly drained out of it.

## Process as folklore

We call these things processes, but most are closer to folklore — a shared belief about how work gets done, transmitted verbally, losing a little detail with every person who leaves.

Folklore has real advantages. It is flexible, it adapts, and it costs nothing to maintain. It has one disadvantage: you cannot prove it.

And the distance between the process you would describe to an auditor and the one that actually ran last Tuesday is your genuine risk surface. It widens every time delivery gets faster.

## The test

There is a simple diagnostic, and it takes about ten seconds to administer to yourself.

> If someone asked you to prove your release process was followed on your last ten deploys — how long would it take you to produce that?

If the answer is measured in days, and involves someone manually reading tickets and screenshotting dashboards, then the process is not a control. It is a description. And the evidence you would eventually hand over is an artifact you constructed after the fact, which is a very different thing from a record.

The useful version of this is not more documentation. It is making the evidence a by-product of shipping — so that proving the process ran costs nothing, because the proof was generated while it was running.
