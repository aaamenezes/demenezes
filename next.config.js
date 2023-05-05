const trustDomains = [
  'www.datocms-assets.com',
  'mariosouto.com',
  'substackcdn.com',
  'www.tabnews.com.br',
  'cdn.shopify.com',
  'blog.rdstation.com',
  'raw.githubusercontent.com',
  'www.joshwcomeau.com',
  'flaviocopes.com',
  'i0.wp.com',
  'www.agenciamestre.com',
  'www.alura.com.br'
]

module.exports = {
  trailingSlash: true,
  experimental: { optimizeCss: true },
  images: {
    remotePatterns: trustDomains.map(domain => ({
      protocol: 'https',
      hostname: domain,
      port: ''
    }))
  }
}
