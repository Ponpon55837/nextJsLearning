// import Banner from './banner'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <div>
      <Head>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
      </Head>
      <Header />
      <br />
      {props.children}
      <br />
      <Footer />
    </div>
  )
}

export default Layout
