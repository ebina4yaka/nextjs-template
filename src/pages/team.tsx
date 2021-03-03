import { ReactElement } from 'react'
import Head from 'next/head'
import Dashboard from '../templates/Dashboard'

export default function Team(): ReactElement {
  return (
    <>
      <Head>
        <title>App | Team</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Dashboard />
    </>
  )
}
