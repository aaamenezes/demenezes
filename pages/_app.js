import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";
import { GlobalStyle } from "../src/theme/globalStyle";


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>

      </Head> */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
