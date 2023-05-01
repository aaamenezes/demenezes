import React from 'react'
import styled from 'styled-components'
import pageWrapper from '../src/components/pageWrapper'
import Container from '../src/components/Common/Container'
import BlockQuote from '../src/components/Common/BlockQuote'
import { getContent } from '../src/external/datoCMS'
import { getMetadataByURL } from '../src/external/getMetadataByURL'

const ReferencesContainer = styled.header`
  padding-top: 6.6rem;
`

function References({ referencesData }) {
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
            <strong>{property}</strong>
            :
            {' '}
            { content }
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default pageWrapper(References)

export async function getStaticProps() {
  // const referencesDatabase = await getContent('allReferences', {})
  // const { allReferences } = referencesDatabase.data

  const allReferences = [
    { url: 'https://www.alura.com.br/artigos/front-end', type: 'blog' },
    { url: 'https://www.joshwcomeau.com/', type: 'blog' }
  ]

  const referencesData = await getMetadataByURL(allReferences)

  return {
    props: { referencesData },
    revalidate: 3600
    /**
     * In secods:
     * 60sec * 60 = 1hour = 3600sec
     */
  }
}
