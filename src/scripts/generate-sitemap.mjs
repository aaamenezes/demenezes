import fs from 'fs'

const BASE_URL = 'https://demenezes.dev/'

export async function generateSitemap(postsSitemapData) {
  const allSitemapData = postsSitemapData
  allSitemapData.push('') // home
  allSitemapData.push('contact')
  allSitemapData.push('about')

  const sitemapItems = allSitemapData
    .map(({ slug, _updatedAt }) => (`  <url>
    <loc>${ `${ BASE_URL }${ slug }` }</loc>
    <lastmod>${ _updatedAt }</lastmod>
  </url>`))
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ sitemapItems }
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}
