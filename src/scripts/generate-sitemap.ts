import fs from 'fs'
import { SitemapItem } from '../types'

const BASE_URL = 'https://demenezes.dev/'

export async function generateSitemap(postsSitemapData: SitemapItem[]) {
  const allSitemapData = postsSitemapData
  allSitemapData.push({ slug: '' }) // home
  allSitemapData.push({ slug: 'contact' })
  allSitemapData.push({ slug: 'about' })

  const sitemapItems = allSitemapData
    .map(({ slug, _updatedAt }) => {
      const updatedAt = _updatedAt
        ? `<lastmod>${_updatedAt}</lastmod>`
        : slug === ''
          ? `<lastmod>${allSitemapData[0]._updatedAt}</lastmod>`
          : ''

      return (`  <url>
        <loc>${`${BASE_URL}${slug}`}</loc>
        ${updatedAt}
      </url>`)
    })
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapItems}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}
