import Link from 'next/link'

const HeaderLink = () => {
  return (
    <>
      <Link href="/">
        <a className="nav-item nav-link" style={wordCapitalize}>Home</a>
      </Link>
      <Link href="/about">
        <a className="nav-item nav-link" style={wordCapitalize}>about</a>
      </Link>
      <Link href="/batman">
        <a className="nav-item nav-link" style={wordCapitalize}>batman</a>
      </Link>
      <Link href="/contact">
        <a className="nav-item nav-link" style={wordCapitalize}>contact</a>
      </Link>
      <Link href="/login">
        <a className="nav-item nav-link" style={wordCapitalize}>login</a>
      </Link>
    </>
  )
}

const wordCapitalize = {
  textTransform: "capitalize"
}

export default HeaderLink
