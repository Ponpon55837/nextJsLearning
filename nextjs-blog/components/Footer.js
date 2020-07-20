import Link from 'next/link'
import { getHeader, footerDescription } from '../pages/apiComponents/functionContextJson.js'
import { fatFooter, wordCapitalize } from '../styles/utilStyle.js'
import layoutStyles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className={layoutStyles.footer} style={fatFooter} >
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <Row>
              {
                !getHeader() ? 'Loading ...' :
                getHeader().map(header => (
                  <Col xs={4} sm={3} md={4} lg={3} xl={3} key={header.id}>
                    <Link href={header.link}>
                      <a className="nav-item nav-link" title={`Connect to ${header.title} Page`} style={wordCapitalize}>{header.title}</a>
                    </Link>
                  </Col>
                ))
              }
            </Row>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <span className={
              `text-muted ${layoutStyles.textModule} ${utilStyles.footerDesSpan}`}>
              { !footerDescription() ? 'Loading ...' : footerDescription() }
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
