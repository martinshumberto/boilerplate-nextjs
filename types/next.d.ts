import * as React from 'react'
import type { AppProps } from 'next/app'
import type { NextComponentType, NextLayoutComponentType, NextPageContext } from 'next'
import type { Router } from 'next/router'

declare module 'next' {
  type NextLayoutComponentType<P = Record<string, unknown>> = NextComponentType<
    NextPageContext,
    unknown,
    P
  > & {
    getLayout?: (
      page: React.ReactElement<unknown, unknown> | null,
    ) => React.ReactElement<unknown, unknown> | null
  }

  type NextLayoutPage<P = Record<string, unknown>, IP = P> = NextComponentType<
    NextPageContext,
    IP,
    P
  > & {
    getLayout?: (
      page: React.ReactElement<unknown, unknown> | null,
    ) => React.ReactElement<unknown, unknown> | null
  }
}

declare module 'next/app' {
  type AppLayoutProps<P = Record<string, unknown>> = AppProps & {
    Component: NextLayoutComponentType
    pageProps: P
    router: Router
    __N_SSG?: boolean
    __N_SSP?: boolean
  }
}
