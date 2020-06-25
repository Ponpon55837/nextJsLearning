import Link from 'next/link'
import { getHeader, footerDescription } from '../pages/apiComponents/functionContextJson.js'
import { fatFooter, wordCapitalize } from '../styles/utilStyle.js'
import layoutStyles from '../styles/layout.module.css'
// bootstrap
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className={layoutStyles.footer} style ={fatFooter}>
      <Container>
        <Row>
          {
            !getHeader() ? 'Loading ...' :
            getHeader().map(header => (
              <Col>
                <Link href={header.link} key={header.id}>
                  <a className="nav-item nav-link" title={`Connect to ${header.title} Page`} style={wordCapitalize}>{header.title}</a>
                </Link>
              </Col>
            ))
          }
        </Row>
        <Row>
          <Col>
            <span className={`text-muted ${layoutStyles.textModule}`}>
              { footerDescription() }
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
