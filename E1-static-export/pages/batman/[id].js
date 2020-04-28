import { useRouter } from 'next/router'
// 用來顯示 `` 中的內容，使用markdown的css標籤來做為外觀調整
import Markdown from 'react-markdown'
import Layout from '../../components/MyLayout'
import Head from 'next/head'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const cardHeader = {
  background: 'linear-gradient(to bottom right, #f8f0a9 0%, #fbf1f8 100%)'
}

const IdPost = ({title = 'ID by index page'}) => {
  const router = useRouter()
  return (
    <>
      <Head><title>{title}</title></Head>
      <Layout>
        <Container>
          <Row>
            <Col xs={0} sm={0} md={1} lg={2} xl={2}>
            </Col>
            <Col xs={12} sm={12} md={10} lg={8} xl={8}>
              <Card border="primary" style={{ width: 'auto' }}>
                <Card.Header style={cardHeader}><h1>{router.query.id}</h1></Card.Header>
                <Card.Body>
                  <Card.Text className="markdown">
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
        <style jsx global>
          {`
            .markdown {
              font-family: 'Arial';
            }

            .markdown a {
              text-decoration: none;
              color: blue;
            }

            .markdown a:hover {
              opacity: 0.6;
            }

            .markdown h3 {
              margin: 0;
              padding: 0;
              text-transform: uppercase;
            }
          `}
        </style>
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
