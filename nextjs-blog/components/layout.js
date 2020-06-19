import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <link rel="shortcut icon" href="" />
        <meta name="description" content="Make a easy website with Next.js which framework by React.js."/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <br />
      { // 原本寫為 props.children ? props.children : 'Loading...'
        children ? children : 'Loading ...'}
      <br />
      <Footer />
    </div>
  )
}

export default Layout
