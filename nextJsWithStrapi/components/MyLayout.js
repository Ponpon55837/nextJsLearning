// import Banner from './banner'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

// 原先寫為(props.children) 現在改爲 {children} 縮減一點複雜度
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <link rel="shortcut icon" href="" />
      </Head>
      <Header />
      <br />
      { // 原本寫為 props.children ? props.children : 'Loading...'
        children ? children : 'Loading...'}
      <br />
      <Footer />
    </div>
  )
}

export default Layout
