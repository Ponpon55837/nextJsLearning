import { fatFooter } from '../styles/utilStyle.js'
import layoutStyles from '../styles/layout.module.css'
// bootstrap
import Container from 'react-bootstrap/Container'

const Footer = () => {
  return (
    <footer className={layoutStyles.footer} style ={fatFooter}>
      <Container>
        <span className="text-muted">Upfloor make nextjs (๑•ี_เ•ี๑)</span>
      </Container>
    </footer>
  )
}

export default Footer
