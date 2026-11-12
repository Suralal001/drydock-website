# Writing for the DryDock blog

## Add a post

1. Create `src/content/blog/your-post-slug.md`. The filename becomes the URL:
   `src/content/blog/why-gates-fail.md` -> `https://usedrydock.com/blog/why-gates-fail`
2. Copy the frontmatter block below and fill it in.
3. `npm run dev` -> http://localhost:4321/blog to preview.
4. Commit and push to `main`. GitHub Actions builds and deploys automatically.

## Frontmatter template

```yaml
---
title: "10-70 characters. This becomes the <title> and the H1."
description: "70-165 characters. This is the meta description and the card text on /blog."
pubDate: 2026-08-20
authors: [suralal-s]              # one or more ids from src/content/authors/
# updatedDate: 2026-09-01         # add when you materially revise a post
pillar: governance                # governance | productivity | risk | cost | insight
answer: "40-320 characters. The direct answer AI engines quote. Rendered in the box at the top."
tags: ["AI governance", "approval gates"]
faqs:
  - q: "A question a buyer actually types"
    a: "A complete, self-contained answer. This generates FAQPage schema."
---
```

## Authors

Authors live in `src/content/authors/`, one Markdown file each. The **filename is
the id** you reference from a post and the URL of their archive page:

```
src/content/authors/priya-n.md  ->  authors: [priya-n]
                                ->  /blog/author/priya-n
```

**To add a person:** copy `src/content/authors/_template.md` to
`src/content/authors/their-name.md` and fill it in. Files starting with `_` are
ignored by the loader, so the template never appears on the site.

**Co-authored posts** list more than one id, most significant first:

```yaml
authors: [suralal-s, priya-n]
```

The byline renders "Suralal S and Priya N" with stacked avatars, both bio cards
appear at the end of the post, and the post shows on both archive pages.

Author ids are validated against the collection at build time, so a typo fails
the build rather than silently rendering a broken byline. Archive pages are only
generated for authors who have at least one published post.

**The build will fail if `title`, `description` or `pubDate` are missing or out of
range.** That is deliberate — it makes SEO drift impossible rather than merely
discouraged. Read the error, fix the field, rebuild.

## Writing for AI answer engines

51% of B2B software buyers now begin vendor research in an AI chatbot, and that
traffic converts far better than search. Posts should be written to be *quoted*,
not just ranked:

- Fill in `answer`. It is the single most extractable thing on the page.
- Make `##` headings the literal questions buyers ask. They become the TOC.
- Use tables for comparisons — AI parses them cleanly.
- Name entities densely: real tools, versions, standards, competitors, dates.
- State definitions plainly in one sentence before elaborating.
- Add `faqs`. FAQPage schema is disproportionately cited.
- Set `updatedDate` when you revise. Freshness is a citation factor.

## Local commands

```bash
npm install     # once
npm run dev     # local preview at :4321
npm run build   # production build into dist/
npm run preview # serve dist/ locally to check the real output
```

## How the site is put together

- `public/` — the existing hand-written site (homepage, pillar pages, comparison
  pages, images). Astro copies these through untouched. Nothing here has changed.
- `src/pages/` — Astro routes. Currently the blog only.
- `src/content/blog/` — posts as Markdown.
- `src/layouts/`, `src/components/`, `src/styles/` — shared shell and design system.
- `infra/cloudfront-clean-urls.js` — **must be deployed** as a CloudFront Function
  or every clean URL 403s. See the comment at the top of that file.

## Migrating the legacy pages (optional, later)

The pages in `public/` work as-is. When you want to deduplicate their nav/footer/CSS,
convert one at a time into `src/pages/*.astro` using `BaseLayout`, and add a
redirect from the old `.html` URL. There is no rush and no risk in leaving them.
