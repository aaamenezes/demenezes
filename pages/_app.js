import React from 'react'

export default function MyApp({ Component, pageProps }) {
  /* <BlogContext.Provider value={blogContextValues()}>
    <Element />
  </BlogContext.Provider> */
  return <Component {...pageProps} />
}
