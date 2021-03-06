/* eslint-disable max-len */
function getQueryOptions(queryType, { slug, category }) {
  const queryMap = {
    aboutPage: `{
      profileImage {
        profileImage {
          alt
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
      allPosts(orderBy: _firstPublishedAt_DESC) {
        title
        slug
        metaDescription
        _firstPublishedAt
        category
        keywords
        thumbnail {
          alt
          responsiveImage(imgixParams: {auto: format}) {
            src
          }
        }
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
      post(filter: { slug: { eq: "${ slug }" } }) {
        title
        seoTitle
        metaDescription
        _updatedAt
        _firstPublishedAt
        category
        keywords
        thumbnail {
          alt
          url
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
                responsiveImage(imgixParams: {auto: format}) {
                  src
                }
              }
            }
            ... on VideoRecord {
              id
              video {
                title
                providerUid
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
          }
        }
      }
    }`,
    relatedPosts: `{
      allPosts(filter: {category: {eq: "${ category }"}}, orderBy: _firstPublishedAt_DESC) {
        title
        slug
        category
        thumbnail {
          alt
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
    }`
  }

  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${ process.env.DATOCMS_TOKEN }`
    },
    body: JSON.stringify({ query: queryMap[queryType] })
  }
}

export async function getContent(queryType, { slug, category }, preview) {
  const datoCMSURL = preview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/'

  const options = getQueryOptions(queryType, { slug, category })
  const response = await fetch(datoCMSURL, options)
  return response.json()
}
