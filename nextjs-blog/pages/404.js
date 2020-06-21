import Layout from '../components/layout'
import Head from 'next/head'
import { pageDescription } from './apiComponents/functionContextJson.js'
import layout from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const Custom404 = ({ title = 'This Page is Not Found', pageDes = 'This page is for 404 not found.' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:description" content={ !pageDes ? pageDescription() : pageDes + '.' + pageDescription() }/>
      </Head>
      <Layout>
        <div className={`${layout.container} ${utilStyles.notfound}`}>
          <h1>404 - Page Not Found</h1>
        </div>
      </Layout>
    </>
  )
}

export default Custom404
