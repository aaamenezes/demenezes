import React, { useState } from 'react'
import styled from 'styled-components'
import { parser } from 'url-meta-scraper'
import pageWrapper from '../src/components/pageWrapper'
import Container from '../src/components/Common/Container'
import BlockQuote from '../src/components/Common/BlockQuote'
import { getContent } from '../src/external/datoCMS'
import Label from '../src/components/Common/Label'
import LinkButton from '../src/components/Common/LinkButton'
// import { PaginationButton } from '../src/components/PaginationButton'

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

// const ButtonsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
// `

function References({ referencesMetaData }) {
  const [ activeReferenceType /* setActiveReferenceType */ ] = useState('Blog')

  // const referenceTypes = [ 'Blog', 'Podcast', 'YouTube', 'Twitter' ]

  // function changeReferenceType(type) {
  //   setActiveReferenceType(type)
  // }

  function validateImageURL(imageURL) {
    const regexp = /^https?:\/\/[^\s/$.?#].[^\s]*$/
    return regexp.test(imageURL)
  }

  const referencesItems = referencesMetaData
    .filter(reference => reference.referenceType === activeReferenceType)
    .map(reference => {
      const { url, image, title, referenceType, description } = reference

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
                  <img
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

  // const buttonsItems = referenceTypes.map(type => (
  //   <PaginationButton
  //     key={type}
  //     as='button'
  //     data-type={type}
  //     onClick={event => {
  //       changeReferenceType(event.currentTarget.dataset.type)
  //     }}
  //   >
  //     {type}
  //   </PaginationButton>
  // ))

  return (
    <Container as={ReferencesContainer}>
      <Container as={ReferencesHeader} width='xxl'>
        <h1>Minhas principais referências na área de programação</h1>
        <BlockQuote>
          <p>Na natureza nada se cria, tudo se copia.</p>
        </BlockQuote>
        {/* <p>Essa página</p> */}
        {/* <ButtonsWrapper>{buttonsItems}</ButtonsWrapper> */}
      </Container>
      <ReferencesList role='list'>{referencesItems}</ReferencesList>
    </Container>
  )
}

export default pageWrapper(References)

export async function getStaticProps() {
  const referencesUrlAndType = await getContent('allReferences', {})
  const { allReferences } = referencesUrlAndType.data

  // const allReferences = [
  //   { url: 'https://mariosouto.com/posts/', referenceType: 'Blog' },
  //   { url: 'https://tidyfirst.substack.com/', referenceType: 'Podcast' }
  // ]

  const referencesPromises = allReferences.map(
    async reference => [ reference, await parser(reference.url) ]
  )

  function getRequireMetadata(reference) {
    if (reference.status === 'rejected') return false

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
