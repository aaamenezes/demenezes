import React from 'react'
import styled from 'styled-components'
import { parser } from 'url-meta-scraper'
import pageWrapper from '../src/components/pageWrapper'
import Container from '../src/components/Common/Container'
import BlockQuote from '../src/components/Common/BlockQuote'
import { getContent } from '../src/external/datoCMS'

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
        {referencesData.map(reference => (
          <li key={reference.url}>
            <h2>{reference.title}</h2>
            <p>{reference.description}</p>
            <p>
              <a href={reference.url}>Acessar</a>
            </p>
            <p>
              <small>{reference.referenceType}</small>
            </p>
            <p>
              <img
                alt={`Imagem de capa do blog ${ reference.title }`}
                src={reference.image}
              />
            </p>
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default pageWrapper(References)

export async function getStaticProps() {
  const referencesDatabase = await getContent('allReferences', {})
  const { allReferences } = referencesDatabase.data

  const promises = allReferences.map(
    async reference => [ reference, await parser(reference.url) ]
  )

  function getData(result) {
    const [ firstPart, secondPart ] = result.value
    const { og } = secondPart
    if (!og) return false

    const { url, referenceType } = firstPart

    return {
      title: og.title || null,
      url,
      description: og.description || null,
      image: og.image || null,
      referenceType
    }
  }

  const referencesData = await Promise.allSettled(promises)
    .then(results => results.map(getData))

  return {
    props: { referencesData },
    revalidate: 86400
    /**
     * In secods:
     * 60sec * 60 = 1hour * 24 = 86400sec = 1 day
     */
  }
}
