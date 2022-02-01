import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Layout } from '../components'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Head>
        <title>Invictus Blog</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
  
  
}

export default MyApp
