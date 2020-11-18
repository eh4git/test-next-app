import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'

export default function morePosts() {
  return (
    <Layout home>
      <Head>
        <title>More Posts</title>
      </Head>
      <h1>More Posts</h1>
      <h2>
        <Link href="/posts/morePosts/anotherLayer/">
          <a>Keep Going</a>
        </Link>
      </h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
