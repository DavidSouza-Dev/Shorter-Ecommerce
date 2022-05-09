import type { AppProps } from "next/app"
import Head from "next/head"
import Provider from "provider/context"
import NextNProgress from "nextjs-progressbar"
import SEO from "../../next-seo.config"

import { GlobalStyles } from "styles/global"
import { DefaultSeo } from "next-seo"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="../../manifest.json" />
        <meta name="theme-color" content="#06092b" />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNProgress
        color="#ffea28"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
      />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App
