import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
}

const Layout = (props) => {
  return (
    <div style={layoutStyle}>
    <Head>
      <title>My first NextJS project</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
    </Head>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-1">
        </div>
        <div className="col-10">
          {props.children}
        </div>
        <div className="col-1">
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Layout
