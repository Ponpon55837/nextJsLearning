import Link from 'next/link'

const mainStyle = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
}

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={mainStyle}>
      <Link href="/">
        <a className="navbar-brand">NextJsPublic</a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link href="/">
            <a className="nav-item nav-link ">Home</a>
          </Link>
          <Link href="/about">
            <a className="nav-item nav-link ">About</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
