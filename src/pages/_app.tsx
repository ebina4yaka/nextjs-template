/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, useEffect } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'

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

  return <Component {...pageProps} />
}
