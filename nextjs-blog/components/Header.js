import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import headerlink from '../pages/api/headerlink.json'
import { mainStyle, wordCapitalize } from '../styles/utilStyle.js'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={mainStyle}>
      <Navbar.Brand href="/">NextJS with Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {
            getHeader().map(header => (
              <Link href={header.link} key={header.id}>
                <a className="nav-item nav-link" style={wordCapitalize}>{header.title}</a>
              </Link>
            ))
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const getHeader = () => {
  return headerlink
}

export default Header
