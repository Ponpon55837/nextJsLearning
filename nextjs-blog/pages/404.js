import Layout from '../components/layout'
import Head from 'next/head'
import { titleDescription, h1Mapping, pageDescription } from './apiComponents/functionContextJson.js'
import layout from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const Custom404 = ({ title = 'This Page is Not Found', pageDes = 'This page is for 404 not found.', h1_id = 8, arr_id = 8 }) => {
  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ !pageDes ? pageDescription() : pageDes + '.' + pageDescription() }/>
      </Head>
      <Layout>
        <div className={`${layout.container} ${utilStyles.notfound}`}>
          { !h1Mapping() ? null : h1Mapping(h1_id, arr_id) }
        </div>
      </Layout>
    </>
  )
}

export default Custom404
