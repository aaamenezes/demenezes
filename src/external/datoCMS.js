const datoCMSURL = 'https://graphql.datocms.com/'

function getQueryOptions(queryType, { slug, category }) {
  const queryMap = {
    aboutPage: `{
      aboutPage {
        greetingTitle
        greetingSubtitle
        greetingDescription
        profileImage {
          alt
          responsiveImage {
            srcSet
          }
        }
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
      contactSection {
        contactTitle
        contactText
      }
    }`,
    allPosts: `{
      allPosts {
        title
        slug
        metaDescription
        _firstPublishedAt
        category
        keywords
        thumbnail {
          alt
          url
        }
      }
    }`,
    contactSection: `{
      contactSection {
        contactTitle
        contactText
      }
    }`,
    post: `{
      post(filter: { slug: { eq: "${ slug }" } }) {
        title
        metaDescription
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
                responsiveImage(imgixParams: {auto: format}) {
                  srcSet
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
              table
              firstColumnHighlight
            }
          }
        }
      }
    }`,
    relatedPosts: `{
      allPosts(filter: { category: { eq: "${ category }" } }) {
        title
        slug
        metaDescription
        _updatedAt
        _firstPublishedAt
        category
        keywords
        thumbnail {
          alt
          url
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

export async function getContent(queryType, { slug, category }) {
  const options = getQueryOptions(queryType, { slug, category })
  const response = await fetch(datoCMSURL, options)
  return response.json()
}
