import Layout from '../components/MyLayout'
import Link from 'next/link'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const Batman = (props, {title = 'Batman TV show menu'}) => {
  // 當api抓取到值之後，props把接到的值map進li當中
  // 這裡href為pages/p/[id].js但是後面使用as來代替為api中的id值
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container>
          <Row>
            <Col xs={0} sm={0} md={1} lg={2} xl={2}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <h1>Batman TV Shows</h1>
              <ul>
                {
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
            <Col xs={0} sm={0} md={1} lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

// 使用非同步的方式讀取json的內容
Batman.getInitialProps = async function() {
  // 使用fetch來抓取api中的值
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  // 指定變數data來非同步這個api值
  const data = await res.json()
  // 回報抓到幾個data值
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    // 使用map來把值塞入，並且使用變數entry當作主詞來附帶api中的內容
    shows: data.map(entry => entry.show)
  }
}
//
// <li key={show.id}>
//   <Link href="/batman/[id]" as={`/batman/${show.id}`}>
//     <a>{show.name}</a>
//   </Link>
// </li>

export default Batman
