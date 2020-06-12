import { fatFooter } from '../styles/utilStyle.js'
// bootstrap
import Container from 'react-bootstrap/Container'

const Footer = () => {
  return (
    <footer className="footer" style ={fatFooter}>
      <Container>
        <span className="text-muted">Upfloor make nextjs (๑•ี_เ•ี๑)</span>
      </Container>
    </footer>
  )
}

export default Footer
