import Link from 'next/link'
import { getHeader, footerDescription } from '../pages/apiComponents/functionContextJson.js'
import { fatFooter, wordCapitalize } from '../styles/utilStyle.js'
import layoutStyles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className={layoutStyles.footer} style ={fatFooter}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <span className={`text-muted ${layoutStyles.textModule}`}>
              { !footerDescription() ? 'Loading ...' : footerDescription() }
            </span>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
            <Row>
              {
                !getHeader() ? 'Loading ...' :
                getHeader().map(header => (
                  <Col className='d-none d-sm-block' key={header.id}>
                    <Link href={header.link}>
                      <a className="nav-item nav-link" title={`Connect to ${header.title} Page`} style={wordCapitalize}>{header.title}</a>
                    </Link>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
