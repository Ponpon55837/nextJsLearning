import Layout from '../components/layout'
import Head from 'next/head'
import { titleDescription, getheadingH1, pageDescription } from './apiComponents/functionContextJson.js'
import layout from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const Custom404 = ({ title = 'This Page is Not Found', pageDes = 'This page is for 404 not found.' }) => {
  const h1_id = 8
  const arr_id = 8
  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ !pageDes ? pageDescription() : pageDes + '.' + pageDescription() }/>
      </Head>
      <Layout>
        <div className={`${layout.container} ${utilStyles.notfound}`}>
          {
            !getheadingH1() ? 'Loading ...' :
            getheadingH1().map(headingH1 => (
              <h1 className={utilStyles.headingH1} key={headingH1.id}>
                {!(headingH1.id == h1_id && headingH1.arr[0].id == arr_id) ? null : headingH1.h1}
              </h1>
            ))
          }
        </div>
      </Layout>
    </>
  )
}

export default Custom404
