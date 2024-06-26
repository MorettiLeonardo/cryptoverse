import ListCoins from '../../components/ListCoins'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container } from '../../styles'

const Cryptocurrencies = () => (
  <>
    <Container>
      <Navbar />
      <ListCoins simplified={false} />
    </Container>
    <Footer />
  </>
)

export default Cryptocurrencies
