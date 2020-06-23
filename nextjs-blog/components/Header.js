import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { handler, getHeader } from '../pages/apiComponents/functionContextJson.js'
import { mainStyle, wordCapitalize } from '../styles/utilStyle.js'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={mainStyle}>
      <Navbar.Brand><span onClick={handler}>NextJS with Bootstrap</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {
            !getHeader() ? 'Loading ...' :
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

export default Header
