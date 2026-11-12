import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Authors.
 *
 * One file per person in src/content/authors/. The filename is the id used
 * to reference an author from a post and to build their archive URL:
 *   src/content/authors/suralal-s.md  ->  authors: [suralal-s]
 *                                     ->  /blog/author/suralal-s
 */
const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string().default('DryDock'),
    bio: z.string().min(40).max(400),
    initials: z.string().max(3).optional(),
    avatar: z.string().optional(),
    linkedin: z.string().url().optional(),
    email: z.string().email().optional(),
    website: z.string().url().optional(),
  }),
});

/**
 * Blog.
 *
 * The schema is deliberately strict: a post CANNOT build if it is missing the
 * fields that AI answer engines and search crawlers rely on. That makes SEO
 * drift impossible rather than merely discouraged.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // ── Required: these drive <title>, meta description and schema.org ──
    title: z.string().min(10).max(70),
    description: z.string().min(70).max(165),
    pubDate: z.coerce.date(),

    // ── Authors: one or more, validated against the authors collection.
    //    A typo here fails the build rather than rendering a wrong byline. ──
    authors: z.array(reference('authors')).nonempty(),

    updatedDate: z.coerce.date().optional(),

    // The one-sentence direct answer AI engines quote.
    answer: z.string().min(40).max(320).optional(),

    tags: z.array(z.string()).default([]),
    pillar: z.enum(['governance', 'productivity', 'risk', 'cost', 'insight']).default('governance'),

    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),

    image: z.string().default('/og.png'),
    imageAlt: z.string().default('DryDock AI — AI delivery governance'),

    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, authors };
