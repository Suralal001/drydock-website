# DryDock website audit: previous homepage vs redesign

Date: 30 October 2026

## Verdict

The redesign improves visual hierarchy, mobile navigation, and audience scanning. The previous homepage does a better job of explaining what makes DryDock different. The strongest next version would keep the new visual system and restore the old site's concrete governance story.

The main regression is strategic: a product previously positioned as an active governance layer now looks primarily like an engineering analytics dashboard. This matters if policy enforcement, specialised agents, and audit evidence remain the actual product differentiators.

This is a heuristic UX and content review, not a user study, accessibility certification, performance benchmark, or conversion experiment. Findings are based on the saved previous HTML, current Astro/CSS/JavaScript, and local browser inspection. Product capabilities and customer outcomes were not independently verified. The old preview's missing blog/RSS routes are an isolated-preview limitation, not counted as defects in the old site. No website implementation was changed for this audit.

## Comparative assessment

| Area | Previous version | Current version | Assessment |
| --- | --- | --- | --- |
| First impression | Distinctive editorial style and drydock illustration | Bold blue/navy system and tangible dashboard | New is more immediately recognisable as software; old is more distinctive |
| Product positioning | AI delivery governance; agents enforce policies and collect evidence | AI insights, software quality, speed and confidence | Old explains differentiation more clearly |
| Navigation | Product-specific labels; links hidden below 860px without a replacement menu | Familiar labels and an accessible mobile toggle | New is better for discovery |
| Readability | Most explanatory copy around 14.5–19.2px | Feature copy 12px desktop, 11px small-screen; chart labels often 6–9px | Important regression in the new version |
| Product explanation | Concrete agent examples, escalation rules, custom workflows | Broad five-step sequence and benefits | Old demonstrates mechanism; new simplifies orientation |
| Audience fit | Engineering leaders and delivery-governance buyers | Six roles and four industries | New makes self-identification easier but dilutes focus |
| Conversion | Consistent early-access request, six visible fields | Four visible fields; demo and early-access paths coexist | Lower form effort, less consistent expectations |
| Trust | Strong assertions and unlabelled example outcomes | Explicitly illustrative metrics; fewer unsupported proof claims | New is more careful, but still lacks verified proof |
| Measurement | Consent-gated CTA, form and Calendly events | Consent-gated analytics retained; those custom events absent | New has lost useful funnel measurement |
| Search context | Explicit governance title and structured data | Broad brand title; no homepage JSON-LD | Preserve current metadata, restore accurate category context |

## UX findings

### What is better now

1. **Clearer visual hierarchy.** Strong headings, consistent blue accents and light/dark section boundaries make the page easier to scan. The old maritime scene is memorable, but requires visitors to interpret a metaphor.
2. **Mobile navigation exists.** The previous stylesheet hides the navigation links below 860px. The new version provides an expandable menu, closes it after selection and exposes its expanded state.
3. **Less form effort.** The visible form drops from six fields to four. Both versions require name, email and company, so this is a reduction in visible work rather than required-field count. Industry links prefill notes without overwriting visitor-entered notes.
4. **Useful browsing paths.** Visitors can find roles, industry contexts, security and the workflow directly. The current page also includes a skip link and visible focus styles.
5. **Consent controls are easier to revisit.** The footer now exposes cookie preferences. Analytics remain gated by consent.

### What needs improvement

**High — Text is too small where it needs to persuade.**

The new feature descriptions use 12px on desktop and 11px on small screens. Form labels are 10px; some dashboard text is 6–9px. Dashboard detail can be illustrative, but feature descriptions and labels are essential reading. Increase primary explanatory copy to roughly 16–18px, secondary copy to 14–16px, and form labels to at least 14px. These are design targets, not an assertion that font size alone determines accessibility compliance.

**High — “Book a demo” does not consistently book a demo.**

The header and hero send visitors to `#early-access`; only the lower personalised-demo link opens Calendly. A visitor may expect a calendar and instead encounter another choice plus an early-access form. Give all booking buttons the same destination. Label a separate form action “Request early access” or “Talk to our team.”

**High — The page repeats benefits instead of deepening understanding.**

The same dashboard appears in the hero and insights section. Role cards, industry cards and “Why DryDock” revisit quality, visibility, speed and risk. Replace one repeated dashboard with a release decision example and merge overlapping benefit sections. The issue is information gained per scroll, not a claim about a measured increase in total page length.

**Medium — Important controls are visually implied but inactive.**

The dashboard sidebar and “Last 30 days” resemble application controls but are static. Treat the panel clearly as a preview or make a small, meaningful demo interactive. Do not suggest that the mock dashboard is a live connected product instance.

**Medium — Industry arrows add little on desktop.**

All four cards are already visible at wide widths; arrows change the selected border and count. On mobile they are useful for bringing a card into view. Hide desktop arrows, or make selection reveal genuinely different detail. Avoid an unexplained selected state.

**Medium — Form feedback regressed.**

The old form changed its submit button to “Sending…” and disabled it. The current form has no equivalent state. Both rely on an external form service and a URL-based return message, so neither has a strong in-page failure/retry experience. Restore pending feedback, provide a recoverable failure path where technically supported, and avoid equating a client-side button click with confirmed delivery.

**Medium — The brand is inconsistent across pages.**

The new homepage uses a diamond mark and “DryDock”; the blog navigation and existing SVG assets retain the anchor and “DryDock AI.” Changing shared colors and fonts only partially resolves that. Use one approved mark and naming convention throughout.

**Medium — Mobile cards still pack in too much.**

Several feature grids remain two columns on narrow screens with small text. Prefer one column for explanatory cards at the smallest breakpoint. Keep two columns only for short labels or metrics. Check touch targets, zoom, keyboard order and color contrast in a dedicated accessibility pass; this review is not a complete compliance audit.

## Content findings

### What the previous version did better

**It named a category and a point of difference.** “Dashboards measure. DryDock governs.” is a clearer differentiator than “Build with AI. Ship with confidence.” The new headline is easy to read, but could belong to many developer products.

**It explained how the product works.** The old page described configurable gates, risk-based escalation, evidence attached to decisions, Dockmaster answers, six specialised agents, and trigger–condition–action workflows. The new “Connect → Analyze → Get insights → Take action → See the impact” sequence explains a generic analytics journey rather than DryDock's distinctive mechanism.

**It addressed buying objections.** Its FAQ covered CI/CD differentiation, whether governance slows delivery, custom agents, early-access contents and pricing. The current FAQ mostly repeats introductory information.

**It described working surfaces.** The old integration section explained answers in Slack, Claude, ChatGPT/MCP and the command deck. The new logo strip communicates compatibility but not where users actually receive or act on findings. Restore only capabilities confirmed to be available.

### What the current version does better

**Shorter, less jargon-heavy entry copy.** It is easier for a new visitor to skim before deciding whether to investigate.

**More explicit audience context.** Role and industry cards help readers recognise their concerns, even though their examples need more depth.

**More careful treatment of proof.** Dashboard numbers are marked illustrative. The supplied mockups' testimonials, performance claims and certification badges were not presented as verified facts. This is preferable to borrowing credibility from unverified references.

**A concrete closing invitation.** “Bring us one real release. We'll show you what DryDock sees.” offers a more tangible conversation than a generic request to contact sales. Explain whether visitors need to share code or can use a guided sample.

### Content weaknesses to fix

**High — Governance has become secondary to analytics.** If DryDock is principally a governance product, a cost/ROI dashboard should not dominate both the first impression and first product section. Show a change, a policy check, an exception requiring approval and the resulting evidence trail.

**High — “For everyone” weakens the primary buying story.** Six roles and four industries do not establish a primary buyer. Lead with the audience most likely to buy—such as engineering leaders responsible for AI-assisted releases, if that matches the business—and show other roles as collaborators.

**High — Example numbers need meaning, not just labels.** “Engineering value,” “AI value / cost,” “AI usage” and “change success” lack definitions. The green upward arrow beside AI tool spend also implies that increased spending is positive without context. Explain what the metric represents, show its source or calculation where appropriate, and use neutral coloring for spending changes unless a desired outcome justifies it.

**High — Security language remains too vague for evaluation.** “Your data stays yours,” “secure by design” and “granular access control” do not answer what data is accessed, where it is processed, how long it is retained, whether model providers receive it, or what permissions are needed. Add confirmed answers. Do not infer certifications or deployment guarantees from the mockups.

**Medium — There is no genuine customer-proof section.** The current engineering-in-practice section links to useful blog posts, not case studies. That is honest, but does not establish customer results. Add a permissioned customer story with context and evidence when available; until then, explicitly label a worked scenario as illustrative.

**Medium — Product maturity is unclear.** “Book a demo,” “Request early access” and broad enterprise-oriented positioning coexist without explaining availability. State whether the product is in private beta, an available pilot, or generally available, once confirmed. Restore accurate onboarding and commercial expectations without reusing unsupported timing or pricing promises.

**Medium — The old content also needs scrutiny before restoration.** Claims such as “most teams see their first governed release within the first week,” illustrative zero-failure statistics, and the 85%/5% industry comparison should not be restored without evidence. Keep the specificity of the old writing, not its unsupported certainty.

## Supporting regressions

- The old `cta_click`, `early_access_request`, and `book_conversation` event handlers are absent from the new homepage. Restore consent-aware funnel events; distinguish submission attempts from confirmed successful requests.
- The old homepage has Organization, SoftwareApplication and FAQPage JSON-LD; the new homepage has none. Restore only accurate, current structured data. This is not a guarantee of rankings or rich results.
- The old title explicitly names “AI Delivery Governance Platform.” The new slogan-led title loses that category context. A category-led title would better align with the preserved governance articles.
- The new homepage retains `/og.png` while changing visual branding. Review the social image for consistency before publication.

## Recommended sequence

### Priority 1: before calling the redesign finished

1. Confirm the primary buyer and product category.
2. Restore a specific governance proposition and one evidence-backed product workflow.
3. Make every demo CTA behave consistently; separate demo booking from early access.
4. Increase essential text sizes, especially on mobile and in forms.
5. Restore consent-gated conversion events and submission feedback.

### Priority 2: strengthen buyer confidence

6. Restore objection-led FAQs and confirmed onboarding/availability details.
7. Replace generic security assurances with precise, approved answers.
8. Consolidate repetitive sections and unify brand assets across the site.
9. Clarify metric definitions and distinguish product previews from customer proof.

### Priority 3: validate with visitors

10. Test whether target buyers can explain what DryDock does, how it differs from a dashboard and what the primary button will do after a short visit.
11. Measure CTA clicks, form completion, successful requests and completed bookings separately. Compare qualified conversations rather than clicks alone.
12. Run focused accessibility and performance checks before production launch.

## Suggested page order

1. Specific governance promise and one real or clearly illustrative release workflow.
2. Recognisable buyer problem: growing changes, limited review capacity, scattered evidence.
3. How DryDock governs: connect, inspect, clear or escalate, log evidence.
4. Specialised agents and configurable policies, if confirmed product capabilities.
5. Engineering impact and clearly defined metrics.
6. Integrations and working surfaces.
7. Verified proof, or a labelled worked example.
8. Security, deployment and data-handling facts.
9. Buying-objection FAQ.
10. One consistent primary conversion path.

Suggested hero direction, subject to capability confirmation:

> Govern AI-generated code before it ships.
>
> DryDock checks changes against your policies, routes exceptions to the right people, and records the evidence behind every release decision.
>
> Primary: Book a demo. Secondary: Explore a release workflow.

Retain the redesign's layout and visual discipline. Recover the previous site's product specificity and distinctive identity. Do not revert wholesale to either version.
