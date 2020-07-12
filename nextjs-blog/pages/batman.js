import Layout from '../components/layout'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { titleDescription, pageDescription } from './apiComponents/functionContextJson.js'
// bootstrap
import { ListGroup, Col, Row, Container } from 'react-bootstrap'

const Batman = (props, { title = 'Batman TV show menu' }) => {
  // 當api抓取到值之後，props把接到的值map進li當中
  // 這裡href為pages/p/[id].js但是後面使用as來代替為api中的id值
  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ !props.shows ? pageDescription() : props.shows.map(show => (show.name)) + '.' + pageDescription() }/>
      </Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <h1>Batman TV Shows</h1>
              <ul>
                {
                  !props.shows ? 'Loading ...' :
                  props.shows.map( show => (
                    <ListGroup variant="flush" key={show.id}>
                      <ListGroup.Item>
                        <Link href="/batman/[id]" as={`/batman/${show.id}`}>
                          <a>{show.name}</a>
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                  ))
                }
              </ul>
            </Col>
            <Col className='d-none d-sm-none d-md-block' md={1} lg={1} xl={1}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

// 使用非同步的方式讀取json的內容
Batman.getInitialProps = async function() {
  // 使用fetch來抓取api中的值
  const res_batman = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  // 指定變數data來非同步這個api值
  const data_batman = await res_batman.json()
  // 回報抓到幾個data值
  console.log(`Show data fetched. Count: ${data_batman.length}`)

  return {
    // 使用map來把值塞入，並且使用變數entry當作主詞來附帶api中的內容
    shows: data_batman.map(entry => entry.show)
  }
}

// 如果看不懂 return裡面的  <Link href="/batman/[id]" as={`/batman/${show.id}`}>
// 下面是官網參考的範例我改成es6格式

// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import Header from '../../../components/header'
//
// const Post = () => {
//   const router = useRouter()
//   const { id } = router.query
//
//   return (
//     <>
//       <Header />
//       <h1>Post: {id}</h1>
//       <ul>
//         <li>
//           <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
//             <a>First comment</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
//             <a>Second comment</a>
//           </Link>
//         </li>
//       </ul>
//     </>
//   )
// }


export default Batman
