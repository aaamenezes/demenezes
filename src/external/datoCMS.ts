type QueryType =
  | 'aboutPage'
  | 'allPosts'
  | 'allReferences'
  | 'post'
  | 'relatedPosts'
  | 'routes'
  | 'contactSection';

interface PageData {
  slug?: string;
  category?: string;
}

function getQueryOptions(queryType: QueryType, { slug, category }: PageData) {
  const queryMap = {
    aboutPage: `{
      profileImage {
        profileImage {
          alt
          width
          height
          responsiveImage(imgixParams: {auto: format}) {
            src
          }
        }
      }
      aboutPage {
        greetingTitle
        greetingSubtitle
        greetingDescription
        categoriesTitle
        categoryItemModule {
          categoryItemTitle
          categoryItemDescription
          categoryItemIcon
        }
        historyTitle
        historyText
        hobbiesTitle
        hobbiesText
      }
    }`,
    allPosts: `{
      allPosts(orderBy: _updatedAt_DESC, first: 100) {
        title
        slug
        metaDescription
        _firstPublishedAt
        _updatedAt
        category
        keywords
        thumbnail {
          alt
          width
          height
          responsiveImage(imgixParams: {auto: format}) {
            src
          }
        }
      }
    }`,
    allReferences: `{
      allReferences(first: 100) {
        url
        referenceType
      }
    }`,
    contactSection: `{
      contactSection {
        contactTitle
        contactText
      }
      profileImage {
        profileImage {
          alt
          responsiveImage {
            srcSet
          }
        }
      }
    }`,
    post: `{
      post(filter: { slug: { eq: "${slug}" } }) {
        title
        seoTitle
        metaDescription
        _updatedAt
        _firstPublishedAt
        category
        keywords
        thumbnail {
          alt
          responsiveImage(imgixParams: {auto: format}) {
            src
          }
        }
        content {
          value
          blocks {
            __typename
            ... on ImageRecord {
              id
              image {
                alt
                title
                width
                height
                responsiveImage(imgixParams: {auto: format}) {
                  src
                }
              }
            }
            ... on ExternalVideoRecord {
              id
              video {
                title
                providerUid
              }
            }
            ... on VideoRecord {
              id
              video {
                url
                alt
              }
            }
            ... on TableRecord {
              id
              tableTitle
              tableSummary
              table
            }
            ... on TextBoxRecord {
              id
              textBoxContent {
                value
              }
            }
            ... on BlockquoteRecord {
              id
              quoteContent {
                value
              }
              author
              source
            }
            ... on TweetRecord {
              id
              tweetEmbedCodeblock
            }
            ... on QuizRecord {
              id
              title
              alternativeOne
              alternativeTwo
              alternativeThree
              alternativeFour
              correctAlternativeIndex
            }
          }
        }
      }
    }`,
    relatedPosts: `{
      allPosts(filter: {category: {eq: "${category}"}}, orderBy: _updatedAt_DESC) {
        title
        slug
        category
        thumbnail {
          alt
          width
          height
          responsiveImage(imgixParams: {auto: format}) {
            src
          }
        }
      }
    }`,
    routes: `{
      allPosts {
        slug
      }
    }`,
  };

  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
    },
    body: JSON.stringify({ query: queryMap[queryType] }),
  };
}

export async function getContent(
  queryType: QueryType,
  { slug, category }: PageData,
  preview = false
) {
  const datoCMSURL = `https://graphql.datocms.com/${preview ? 'preview' : ''}`;
  const options = getQueryOptions(queryType, { slug, category });
  const response = await fetch(datoCMSURL, options);
  return response.json();
}
