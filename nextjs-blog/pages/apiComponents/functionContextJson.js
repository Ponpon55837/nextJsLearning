import Link from 'next/link'
import Router from 'next/router'
import headerlink from '../api/headerlink.json'
import indexHelloNextJs from '../api/indexHelloNextJs.json'
import park from '../api/parkAPI.json'
import { wordCapitalize } from '../../styles/utilStyle.js'
import { Row, Col } from 'react-bootstrap'

// 把所有使用內部json的function放在這邊，這樣要重複使用呼叫不用作多餘的事情
// 但是如果是使用getStaticProps or getInitialProps or getServerSideProps or getStaticPath則無法如此使用

// API_URL為.env這個檔案中的網址來使用，普通使用的畫沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL
export const { API_URL } = process.env

export const getHeader = () => {
  return headerlink
}

// 使用function作爲api承接內容，在上方的return中map接到的值
export const getIndexHelloNextJs = () => {
  return indexHelloNextJs
}

export const getPark = () => {
  return park
}

// for Header.js
export const handler = () => {
  Router.push({
    pathname: '/',
    query: {
      name: 'Home',
      title: 'Connect to Home Page',
    },
  })
}

// 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用
export const PostLink = ({ post }) => (
  <Link href="/batman/[id]" as={`/batman/${post.id}`}>
    <a title={`Connect to ${post.title} Page`}>{post.title}</a>
  </Link>
)

export const pageDescription = ( pageDes ) => {
  return pageDes = 'This is the page for the website.This content to description this text website how to use.'
}

export const titleDescription = ( titleDes ) => {
  return titleDes = 'The website is built by upfloor which is a work that train myself to be up floor.'
}

export const footerDescription = ( footerDes ) => {
  return (
    <Row>
      <Col xs={0} sm={0} md={1} lg={1} xl={2}></Col>
      <Col xs={6} sm={6} md={5} lg={5} xl={4}>{ !webDescription() ? 'Loading ...' : webDescription() }</Col>
      <Col xs={6} sm={6} md={5} lg={5} xl={4}>{ !copyRight() ? 'Loafing ...' : copyRight() }</Col>
      <Col xs={0} sm={0} md={1} lg={1} xl={2}></Col>
    </Row>
  )
}

export const webDescription = ( webDes ) => {
  return webDes = `Upfloor make nextjs (๑•ี_เ•ี๑)`
}

export const copyRight = ( copyDes ) => {
  return copyDes = `Copyright © 2019-2020 Upfloor`
}

export const get_random = (list) => {
  return list[ Math.floor( Math.random() * list.length ) ]
}

export const headerBar = ( headBar ) => {
  const randomText = [ 'NextJS', 'Bootstrap', 'ReactJs', 'Framework', 'Javascript' ]
  const randomWriter = [ 'Upfloor', 'StudioP', 'GameStart', 'FrontendLearning' ]

  return headBar = get_random(randomText) + ' with ' + get_random(randomWriter)
}
