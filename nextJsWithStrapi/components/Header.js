import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import headerlink from '../pages/api/headerlink.json'

const mainStyle = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  position: 'sticky',
  top:'0',
  width: '100%',
  transition:'all 0.5s',
  zIndex: '1'
}

const wordCapitalize = {
  textTransform: "capitalize"
}

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={mainStyle}>
      <Navbar.Brand href="/">NextJS with Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {
            getHeader().map(header => (
              <Link prefetch href={header.link} key={header.id}>
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
