import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import type { AppInitialProps, AppLayoutProps } from 'next/app'
import type { NextComponentType } from 'next'
import Head from 'next/head'
import App, { AppContext } from 'next/app'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <Head>
        <title>Boilerplate NextJS</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)

  return {
    pageProps: {
      ...appProps.pageProps,
    },
  }
}

export default MyApp
