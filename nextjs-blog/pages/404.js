import Layout from '../components/layout'
import Head from 'next/head'
import layout from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const Custom404 = ({ title = 'This Page is Not Found' }) => {
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <div className={`${layout.container} ${utilStyles.notfound}`}>
          <h1>404 - Page Not Found</h1>
        </div>
      </Layout>
    </>
  )
}

export default Custom404
