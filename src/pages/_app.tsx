/* eslint-disable react/jsx-props-no-spreading */
import { ReactElement, useEffect } from 'react'
import { AppProps } from 'next/app'
import useDarkMode, { darkModeContext } from '../context/useDarkMode'
import '../styles/globals.css'

export default function MyApp(props: AppProps): ReactElement {
  const { Component, pageProps } = props
  const context = useDarkMode()
  const { setDarkMode } = context

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      // eslint-disable-next-line no-unused-expressions
      jssStyles.parentElement?.removeChild(jssStyles)
    }
    // Dark mode
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setDarkMode(false)
    }
  }, [])

  return (
    <darkModeContext.Provider value={context}>
      <Component {...pageProps} />
    </darkModeContext.Provider>
  )
}
