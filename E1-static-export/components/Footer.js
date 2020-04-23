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

const fatFooter = {
  // position: 'fixed',
  height: 'auto',
  bottom: '0',
  width: '100%',
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  textAlign: 'center',
  paddingTop: '25px',
  paddingBottom: '25px',
  position: 'fixed'
}

export default Footer
