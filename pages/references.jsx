import React from 'react'
import styled from 'styled-components'
import { parser } from 'url-meta-scraper'
import pageWrapper from '../src/components/pageWrapper'
import Container from '../src/components/Common/Container'
import BlockQuote from '../src/components/Common/BlockQuote'
import { getContent } from '../src/external/datoCMS'
import Image from '../src/components/Common/Figure'
import Label from '../src/components/Common/Label'
import LinkButton from '../src/components/Common/LinkButton'

const ReferencesContainer = styled.header`
  padding-top: 6.6rem;
`

const ReferencesHeader = styled.header``

const ReferencesList = styled.ul`
  list-style-type: none;
  margin-left: 0;
`

const ReferenceItem = styled.li`
  display: grid;
  place-items: center;
  position: relative;
  min-height: 100vh;
  padding: ${ ({ theme }) => `${ theme.spacing.h1 }rem` };
  margin-bottom: 0;

  &::before {
    content: ' ';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-image: ${ ({ referenceImage }) => `url('${ referenceImage }')` };
    background-size: cover;
    background-position: center;
    filter: blur(0.25rem);
  }
`

const ReferenceItemWrapper = styled.div`
  position: relative;
  padding: 0;
`

const ReferenceTitle = styled.h2`
  margin: 0 0 ${ ({ theme }) => `${ theme.spacing.h2 }rem` };
`

const ReferenceLabel = styled.p`
  position: initial;
  width: fit-content;
  margin-left: auto;
`

function References({ referencesMetaData }) {
  const ReferencesItems = referencesMetaData.map(reference => {
    const { url, image, title, referenceType, description } = reference

    function validateImageURL(imageURL) {
      const regexp = /^https?:\/\/[^\s/$.?#].[^\s]*$/
      return regexp.test(imageURL)
    }

    /**
     * TODOs:
     * - Trocar <a> por <LinkButton />
     * - Add target _blank
     */

    return (
      <ReferenceItem key={url} referenceImage={image}>
        <Container as={ReferenceItemWrapper} width='md' spacing={0}>
          <ReferenceTitle>{title}</ReferenceTitle>
          <Label as={ReferenceLabel}>
            {referenceType}
          </Label>
          <p>{description}</p>
          <LinkButton
            href={url}
            external
            inline={!validateImageURL(image)}
          >
            {validateImageURL(image)
              ? (
                <Image
                  src={image}
                  width={640}
                  height={480}
                  alt={`Imagem de capa do ${ referenceType }`}
                />
              )
              : 'Acessar:'}
          </LinkButton>
        </Container>
      </ReferenceItem>
    )
  })

  return (
    <Container as={ReferencesContainer}>
      <Container as={ReferencesHeader} width='xxl'>
        <h1>Minhas principais referências na área de programação</h1>
        <BlockQuote>
          <p>Na natureza nada se cria, tudo se copia.</p>
        </BlockQuote>
        <p>Essa página contém links para todas as referências... [continuar]</p>
      </Container>
      <ReferencesList role='list'>
        {ReferencesItems}
      </ReferencesList>
    </Container>
  )
}

export default pageWrapper(References)

export async function getStaticProps() {
  const referencesUrlAndType = await getContent('allReferences', {})
  const { allReferences } = referencesUrlAndType.data

  // const allReferences = [
  //   { url: 'https://mariosouto.com/posts/', referenceType: 'blog' },
  //   { url: 'https://tidyfirst.substack.com/', referenceType: 'podcast' }
  // ]

  const referencesPromises = allReferences.map(
    async reference => [ reference, await parser(reference.url) ]
  )

  function getRequireMetadata(reference) {
    const [ firstPart, secondPart ] = reference.value
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

  const referencesMetaData = await Promise.allSettled(referencesPromises)
    .then(allMetadata => allMetadata.map(getRequireMetadata))

  return {
    props: { referencesMetaData },
    revalidate: 86400
    /**
     * In secods:
     * 60sec * 60 = 1hour * 24 = 86400sec = 1 day
     */
  }
}
