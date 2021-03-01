/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

export default function MyApp(props: AppProps): ReactElement {
  const { Component, pageProps } = props

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      // eslint-disable-next-line no-unused-expressions
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title>App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <style type="text/css">{`body { font-family: 'Roboto' }`}</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
