import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import { getHeader } from './apiComponents/functionContextJson.js'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Home = ({ title = 'Index Page' }) => {
  return (
    <div className={utilStyles.indexBG}>
      <Head><title>{title}</title></Head>
      <Container fluid>
        <Row>
          <Col className={utilStyles.homeShow} xs={12} sm={12} md={8} lg={6} xl={6}>
            <h1 className={utilStyles.divH1}>Welcome</h1>
            { // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
               getHeader() ? getHeader().map(header => (
                <Button variant="outline-dark" size='lg' block className={utilStyles.buttonControl} key={header.id}>
                  <Link href={header.link}><a style={wordCapitalize}>{header.title}</a></Link>
                </Button>
              )) : 'Loading'
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const wordCapitalize = {
  textTransform: "capitalize"
}

export default Home
