import { useRouter } from 'next/router'
import utilStyles from '../../styles/utils.module.css'
import { cardHeader } from '../../styles/utilStyle.js'
import { titleDescription, pageDescription } from '../apiComponents/functionContextJson.js'
import Markdown from 'react-markdown'
import Layout from '../../components/layout'
import Head from 'next/head'
// bootstrap
import { Card, Col, Row, Container } from 'react-bootstrap'

const IdPost = ({title = 'ID by index page'}) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title + '.   ' + titleDescription()}</title>
        <meta property="og:description" content={ pageDescription() }/>
      </Head>
      <Layout>
        <Container fluid>
          <Row>
            <Col xs={0} sm={0} md={1} lg={2} xl={2}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <Card border="primary" style={{ width: 'auto' }}>
                <Card.Header style={cardHeader}><h1>{router.query.id}</h1></Card.Header>
                <Card.Body>
                  <Card.Text className={utilStyles.markdown}>
                    <Markdown
                      source={`This is our blog post.Yes. We can have a [link](/link).And we can have a title as well.### This is a title And here's the content.`}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={0} sm={0} md={1} lg={2} xl={2}></Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
export default IdPost

// import Layout from '../../components/MyLayout'
// import fetch from 'isomorphic-unfetch'
//
// // 這裡props作爲接收api內容的銜接變數
// const Post = (props) => {
//   return (
//     <Layout>
//       <h1>{props.show.name}</h1>
//       <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//       {props.show.image ? <img src={props.show.image.medium} /> : null}
//     </Layout>
//   )
// }
//
// // 藉由fetch來抓取api中對應的id頁面並將值接入
// Post.getInitialProps = async function(context) {
//   // 解構id這個變數為context接到的全部內容底下的query值
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }
//
// export default Post
