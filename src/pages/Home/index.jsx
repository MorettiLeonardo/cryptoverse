import HomeHero from '../../components/HomeHero'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Container>
      <Navbar />
      <HomeHero />
    </Container>
    <Footer />
  </>
)

export default Home
