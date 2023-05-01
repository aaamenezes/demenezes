import cheerio from 'cheerio'

export async function getMetadataByURL(references) {
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

  /* ======================================================================== */
  // const result = references.map(async item => {
  //   const r = await fetch(CORS_PROXY + item.url, {
  //     headers: { Origin: 'https://demenezes.dev/' }
  //   })
  //     .then(response => response.text())
  //     .then(getMetadata)
  //     .catch(console.error)

  //   return r
  // })
  /* ======================================================================== */

  const referencesData = await fetch(CORS_PROXY + references[0].url, {
    headers: { Origin: 'https://www.alura.com.br/artigos/front-end' }
  })
    .then(response => response.text())
    .then(getMetadata)
    .catch(console.error)

  function getMetadata(html) {
    const $ = cheerio.load(html)

    const allMetaData = $('head meta').map((index, item) => {
      if (!item.attribs) return null

      const { property, content } = item.attribs
      if (!property || !content) return null

      return { property, content }
    })

    const metaDataMap = {
      'og:title': 'title',
      'og:url': 'url',
      'og:description': 'description',
      'og:site_name': 'siteName',
      'og:image': 'image'
    }

    const metaData = [ ...allMetaData ].reduce((previewData, item) => {
      const key = metaDataMap[item.property]
      if (key) previewData[key] = item.content
      return previewData
    }, {})

    return metaData
  }

  return referencesData
}
