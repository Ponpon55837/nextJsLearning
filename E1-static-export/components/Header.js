import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

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
          <Link href="/">
            <a className="nav-item nav-link ">Home</a>
          </Link>
          {
            headers.map(header => (
              <Link href="/[headers]" as={`/${header}`}>
                <a className="nav-item nav-link" style={wordCapitalize}>{header}</a>
              </Link>
            ))
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

// 使用陣列把連結塞入map中
const headers = ['about', 'batman', 'contact', 'login']

export default Header
