const datoCMSURL = 'https://graphql.datocms.com/'

function getQueryOptions(queryType, { slug, category }) {
  const queryMap = {
    allPosts: {
      query: `{
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
      }`
    },
    post: {
      query: `{
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
      }`
    },
    relatedPosts: {
      query: `{
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
      }`
    },
    routes: {
      query: `{
        allPosts {
          slug
        }
      }`
    }
  }

  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${ process.env.DATOCMS_TOKEN }`
    },
    body: JSON.stringify(queryMap[queryType])
  }
}

export async function getContent(queryType, { slug, category }) {
  const options = getQueryOptions(queryType, { slug, category })
  const response = await fetch(datoCMSURL, options)
  return response.json()
}
