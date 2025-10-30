/* eslint-disable @typescript-eslint/no-explicit-any */

import Head from '@/components/meta/Head';
import Wrapper from '@/components/ui/container/Wrapper';
import PageFooter from '@/components/ui/section/PageFooter';
import PageHeader from '@/components/ui/section/PageHeader';

// const ReferencesContainer = styled.header`
//   padding-top: 6.6rem;
// `;

// const ReferencesHeader = styled.header``;

// const ReferencesList = styled.ul`
//   list-style-type: none;
//   margin-left: 0;
// `;

// const ReferenceItem = styled.li<{
//   referenceImage: string;
// }>`
//   display: grid;
//   place-items: center;
//   position: relative;
//   min-height: 100vh;
//   padding: ${({ theme }) => `${theme.spacing.h1}rem`};
//   margin-bottom: 0;

//   &::before {
//     content: ' ';
//     position: absolute;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//     opacity: 0.1;
//     background-image: ${({ referenceImage }) => `url('${referenceImage}')`};
//     background-size: cover;
//     background-position: center;
//     filter: blur(0.25rem);
//   }
// `;

// const ReferenceItemWrapper = styled.div`
//   position: relative;
//   padding: 0;
// `;

// const ReferenceTitle = styled.h2`
//   margin: 0 0 ${({ theme }) => `${theme.spacing.h2}rem`};
// `;

// const ReferenceCategory = styled.p`
//   position: initial;
//   width: fit-content;
//   margin-left: auto;
// `;

// interface ReferenceProps {
//   data: {
//     allReferences: Array<{
//       type: 'Blog' | 'Podcast' | 'YouTube' | 'Twitter';
//       url: string;
//       image: string;
//       title: string;
//       description: string;
//       og: {
//         title: string;
//         url: string;
//         site_name: string;
//         description: string;
//         image: string;
//       };
//     }>;
//   };
// }

// interface ReferenceUrlAndType {
//   data: {
//     allReferences: Array<
//       Pick<ReferenceProps['data']['allReferences']['0'], 'url' | 'type'>
//     >;
//   };
// }

// interface ParseReturnProps {
//   status: 'fulfilled' | 'rejected';
//   value: any;
// }

export default function References({
  referencesMetaData,
}: {
  referencesMetaData: any;
}) {
  // const [activeType, setActiveType] = useState('Blog');

  // const Types = [ 'Blog', 'Podcast', 'YouTube', 'Twitter' ]

  // function changeType(type) {
  //   setActiveType(type)
  // }

  // function validateImageURL(imageURL: string) {
  //   const regexp = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
  //   return regexp.test(imageURL);
  // }

  // const referencesItems = referencesMetaData
  //   .filter((reference: any) => reference.type === activeType)
  //   .map((reference: any ) => {
  //     return <div key={index}></div>
  //     const { url, image, title, type, description } = reference;

  //     return (
  //       <ReferenceItem key={url} referenceImage={image}>
  //         <Wrapper /* as={ReferenceItemWrapper} */ width="md" spacing={0}>
  //           <ReferenceTitle>{title}</ReferenceTitle>
  //           <Category /* as={ReferenceCategory} */>{type}</Category>
  //           <p>{description}</p>
  //           <LinkButton href={url} external inline={!validateImageURL(image)}>
  //             {validateImageURL(image) ? (
  //               <img
  //                 src={image}
  //                 width={640}
  //                 height={480}
  //                 alt={`Imagem de capa do ${type}`}
  //               />
  //             ) : (
  //               'Acessar:'
  //             )}
  //           </LinkButton>
  //         </Wrapper>
  //       </ReferenceItem>
  //     );
  //   });

  // const buttonsItems = types.map(type => (
  //   <PaginationButton
  //     key={type}
  //     as='button'
  //     data-type={type}
  //     onClick={event => {
  //       changeType(event.currentTarget.dataset.type)
  //     }}
  //   >
  //     {type}
  //   </PaginationButton>
  // ))

  return (
    <>
      <Head componentProps={{}} />
      <PageHeader />
      <Wrapper width="full">
        <Wrapper width="xxl">
          <h1>Em construção...</h1>
          <div>
            <pre>{JSON.stringify(referencesMetaData, null, 2)}</pre>
          </div>
          {/* <h1>Minhas principais referências na área de programação</h1>
            <BlockQuote>
              <p>Na natureza nada se cria, tudo se copia.</p>
            </BlockQuote>
          */}
          {/* <p>Essa página</p> */}
          {/* <ButtonsWrapper>{buttonsItems}</ButtonsWrapper> */}
        </Wrapper>
      </Wrapper>
      <PageFooter />
    </>
  );
}

export async function getStaticProps() {
  // const referencesUrlAndType: ReferenceUrlAndType = await getContent(
  //   'allReferences',
  //   {}
  // );
  // const { allReferences } = referencesUrlAndType.data;

  // const allReferences = [
  //   { url: 'https://mariosouto.com/posts/', type: 'Blog' },
  //   { url: 'https://tidyfirst.substack.com/', type: 'Podcast' }
  // ]

  // const referencesPromises: Array<
  //   Promise<
  //     Array<[ReferenceProps['data']['allReferences']['0'], ParseReturnProps]>
  //   >
  // > = allReferences.map(
  //   async (reference: ReferenceProps['data']['allReferences']['0']) => [
  //     reference,
  //     await parser(reference.url),
  //   ]
  // );

  /**
   * Não está claro pq existe firstPart e secondPart
   * Acho que é coisa do parser
   * Tentar fazer isso sem lib
   */
  // function formatMetadata(reference: {
  //   status: 'fulfilled' | 'rejected';
  //   value: [ReferenceProps['data']['allReferences']['0'], any];
  // }) {
  //   if (reference.status === 'rejected') return {};

  //   const [firstPart, secondPart] = reference.value;
  //   const { og } = secondPart;
  //   if (!og) return {};

  //   const { url, type } = firstPart;

  //   return {
  //     title: og.title || null,
  //     url,
  //     description: og.description || null,
  //     image: og.image || null,
  //     type,
  //   };
  // }

  // const referencesMetaData = await Promise.allSettled(referencesPromises)
  //   .then(allMetadata =>
  //     allMetadata.map(metadata => {
  //       return formatMetadata(metadata);
  //     })
  //   )
  //   .catch(error => {
  //     console.error(error);
  //     return [];
  //   });

  return {
    props: { referencesMetaData: /* referencesMetaData || */ [] },
  };
}
