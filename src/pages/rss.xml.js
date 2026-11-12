import rss from '@astrojs/rss';
import { getCollection, getEntries } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const items = await Promise.all(
    posts.map(async (post) => {
      const authors = await getEntries(post.data.authors);
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.id}`,
        categories: post.data.tags,
        author: authors.map((a) => a.data.name).join(', '),
      };
    })
  );

  return rss({
    title: 'DryDock AI — AI Delivery Governance',
    description:
      'Writing on governing software delivery in the AI era: approvals, evidence, risk routing and the cost of AI tooling.',
    site: context.site,
    items,
    customData: '<language>en-gb</language>',
  });
}
