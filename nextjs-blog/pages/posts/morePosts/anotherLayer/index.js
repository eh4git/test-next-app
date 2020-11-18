import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../../components/layout'

export default function anotherLayer() {
  return (
    <Layout home>
      <Head>
        <title>Another Layer</title>
      </Head>
      <h1>Another Layer</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}