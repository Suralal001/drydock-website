import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Legacy hand-written pages that live in public/ — Astro does not know about
// them, so they are declared here to keep them in the generated sitemap.
const LEGACY_PAGES = [
  'https://usedrydock.com/what-is-ai-delivery-governance.html',
  'https://usedrydock.com/how-to-govern-ai-generated-code.html',
  'https://usedrydock.com/eu-ai-act-software-teams.html',
  'https://usedrydock.com/best-ai-code-governance-tools.html',
  'https://usedrydock.com/drydock-vs-qodo.html',
  'https://usedrydock.com/drydock-vs-jellyfish.html',
  'https://usedrydock.com/drydock-vs-linearb.html',
];

export default defineConfig({
  site: 'https://usedrydock.com',
  trailingSlash: 'ignore',
  build: {
    // /blog/my-post/index.html  ->  clean URL /blog/my-post
    // Requires the CloudFront viewer-request function (cloudfront-clean-urls.js)
    format: 'directory',
  },
  integrations: [
    sitemap({
      customPages: LEGACY_PAGES,
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
});
