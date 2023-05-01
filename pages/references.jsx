import React from 'react'
import styled from 'styled-components'
import pageWrapper from '../src/components/pageWrapper'
import Container from '../src/components/Common/Container'
import BlockQuote from '../src/components/Common/BlockQuote'
import cheerio from 'cheerio'

const ReferencesContainer = styled.header`
  padding-top: 6.6rem;
`

function References({ referencesData }) {
  console.log('referencesData:', referencesData)

  return (
    <Container as={ReferencesContainer} width='lg'>
      <h1>Minhas principais referências na área de programação</h1>
      <BlockQuote>
        <p>Na natureza nada se cria, tudo se copia.</p>
      </BlockQuote>
      <p>Essa página contém links para todas as referências...</p>
      <ul>
        {Object.entries(referencesData).map(([ property, content ]) => (
          <li key={content}>
            {property}: {content}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default pageWrapper(References)

export async function getStaticProps() {
  const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

  const referencesURLs = [
    'https://www.alura.com.br/artigos/front-end',
    'https://www.joshwcomeau.com/'
  ]

  const referencesData = await fetch(CORS_PROXY + referencesURLs[0], {
    headers: { Origin: 'https://demenezes.dev/' }
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

    return Promise.resolve(metaData)
  }


  return {
    props: { referencesData },
    revalidate: 3600
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
  }
}
