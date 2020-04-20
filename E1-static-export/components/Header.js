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

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={mainStyle}>
      <Navbar.Brand href="#home">NextJS with Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/">
            <a className="nav-item nav-link ">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-item nav-link ">About</a>
          </Link>
          <Link href="/batman">
            <a className="nav-item nav-link ">Batman</a>
          </Link>
          <Link href="/contact">
            <a className="nav-item nav-link ">Contact</a>
          </Link>
          <Link href="/login">
            <a className="nav-item nav-link ">Login</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
