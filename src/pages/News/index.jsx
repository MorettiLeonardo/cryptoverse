import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import NewsContent from '../../components/NewsContent'
import { Container } from '../../styles'

const News = () => (
  <>
    <Container>
      <Navbar />
      <NewsContent renderAll />
    </Container>
    <Footer />
  </>
)

export default News
