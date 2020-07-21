import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
        <link rel="shortcut icon" href="../public/favicon.ico" />
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
