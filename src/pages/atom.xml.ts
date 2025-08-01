import rss from '@astrojs/rss';
import { getPosts, getEssays } from '~/utils';
import { THEME_CONFIG } from "~/theme.config";
import type { APIContext } from 'astro';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

const { title, desc, website, author } = THEME_CONFIG


export async function GET(_context: APIContext) {
  const posts = await getPosts()
  const essays = await getEssays()
  const allowedTags = sanitizeHtml.defaults.allowedTags.concat(['img'])

  // 合并文章和随笔，按发布日期排序
  const allContent = [
    ...posts.map((post) => ({
      type: 'post',
      content: post,
      link: `/posts/${post.slug}/`,
    })),
    ...essays.map((essay) => ({
      type: 'essay',
      content: essay,
      link: `/essays/${essay.slug}/`,
    }))
  ].sort((a, b) => {
    const aDate = a.content.data.pubDate || new Date()
    const bDate = b.content.data.pubDate || new Date()
    return bDate.getTime() - aDate.getTime()
  })

  return rss({
    title: title,
    description: desc,
    site: website,
    items: allContent.map((item) => {
      const content = item.content
      return {
        link: item.link,
        author: author,
        content: sanitizeHtml(parser.render(content.body), { allowedTags, }),
        title: content.data.title,
        pubDate: content.data.pubDate,
        description: content.data.description,
        customData: content.data.customData,
        categories: content.data.categories,
        commentsUrl: content.data.commentsUrl,
        source: content.data.source,
        enclosure: content.data.enclosure,
      }
    }),
    stylesheet: '/pretty-feed-v3.xsl',
  });
}
