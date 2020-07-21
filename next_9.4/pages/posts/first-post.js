import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout.js'
import { titleDescription, pageDescription } from '../apiComponents/functionContextJson.js'

const FirstPost = ({ title = 'This is the posts firs-post page.' }) => {
  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ pageDescription() }/>
      </Head>
      <Layout>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  )
}

export default FirstPost
