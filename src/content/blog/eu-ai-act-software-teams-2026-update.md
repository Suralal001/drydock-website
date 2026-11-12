---
title: "EU AI Act for software teams: what changed in 2026"
description: "High-risk obligations moved to December 2027. Transparency obligations did not. Here is what actually applies to engineering teams, and what does not."
pubDate: 2026-06-30
authors: [suralal-s]
updatedDate: 2026-08-14
pillar: governance
answer: "On 7 May 2026 the EU agreed to postpone high-risk AI system obligations from August 2026 to December 2027. General-purpose AI and Article 50 transparency obligations were not postponed. Most software teams using AI coding assistants are not operating high-risk systems."
tags: ["EU AI Act", "compliance", "AI regulation", "governance"]
faqs:
  - q: "When does the EU AI Act apply to high-risk systems?"
    a: "Following a political agreement on 7 May 2026, obligations for high-risk AI systems were postponed from August 2026 to December 2027. The change required formal adoption by Parliament and Council before becoming legally binding."
  - q: "Does the EU AI Act apply to AI coding assistants?"
    a: "Using an AI coding assistant to write internal software does not normally make an organisation a provider of a high-risk AI system. Obligations attach to the AI systems you place on the market or put into service, not to the tools used to build ordinary software."
  - q: "What EU AI Act obligations still apply in August 2026?"
    a: "General-purpose AI obligations and Article 50 transparency requirements were not postponed. Transparency duties for systems interacting with people continue to apply on the original timeline."
---

If your compliance planning still assumes an August 2026 deadline for high-risk AI systems, it is out of date — and this is worth correcting internally before someone builds a roadmap around it.

## What actually changed

On **7 May 2026**, the EU reached political agreement to postpone obligations for high-risk AI systems from August 2026 to **December 2027**. The change required formal adoption by Parliament and Council before becoming legally binding.

Two things did **not** move:

- **General-purpose AI obligations.**
- **Article 50 transparency obligations**, which govern systems that interact with people or generate synthetic content.

So the picture is a split timeline, not a blanket delay. Reading headlines about "the AI Act being delayed" and concluding nothing applies would be a mistake.

## The distinction most engineering teams get wrong

Here is the question that matters, and it is asked backwards more often than not.

The Act regulates **the AI systems you place on the market or put into service**. It does not regulate the tools you used to build ordinary software.

Using GitHub Copilot, Cursor or Claude Code to write your internal billing service does not make you the provider of a high-risk AI system. The billing service is not an AI system. It is software that happened to be written with assistance.

Where obligations genuinely attach is different: if your product itself makes or materially influences decisions in a regulated domain — credit, employment, education, essential services, safety components — then you are in scope, and that was true before the delay and remains true after it.

## What this means for planning

| If you are… | Deadline position | Sensible action |
| --- | --- | --- |
| Using AI tools to build conventional software | Not a high-risk provider | Good practice, not compliance |
| Shipping AI features that interact with users | Article 50 unchanged | Transparency duties apply now |
| Building AI into regulated decisions | December 2027 | Real programme, start now |
| Selling into EU enterprises | Their procurement will ask regardless | Be able to answer |

That last row is the one people underestimate. Even where the Act does not bind you directly, your enterprise customers in scope will push diligence questions down their supply chain. "We are not in scope" is a correct answer that still requires evidence.

## The better reason to act

The delay removes a deadline. It does not remove a problem.

If you cannot currently say which changes to your production systems a human reviewed, which checks ran before a release, or who authorised a given deployment, that is a live operational exposure regardless of what any regulator requires. Incidents and audits both surface it, and both do so at the least convenient moment.

Compliance deadlines are a poor motivator precisely because they move. The reason to build governance into delivery is that you ship several hundred changes a month, AI wrote a large share of them, and nobody can currently reconstruct which ones a person actually checked.

That argument has no expiry date, and it survived the May agreement entirely intact.

---

*This post is general information about regulatory timelines, not legal advice. Confirm your specific obligations with qualified counsel.*
