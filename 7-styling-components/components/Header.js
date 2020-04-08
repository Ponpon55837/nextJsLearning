import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  // 新增頁面的路徑連結，只要頁面是從根路徑來的
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/contact">
        <a style={linkStyle}>Contact</a>
      </Link>
    </div>
  )
}
