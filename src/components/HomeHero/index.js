import { Wrapper, InfosContainer, Infos } from './styles'

const HomeHero = () => (
  <Wrapper>
    <h1>Global Crypto Stats</h1>
    <InfosContainer>
      <Infos>
        <p>Total Cryptocurrencies</p>
        <h3>5</h3>
      </Infos>
      <Infos>
        <p>Total Exchanges</p>
        <h3>5</h3>
      </Infos>
      <Infos>
        <p>Total Market Cap</p>
        <h3>5</h3>
      </Infos>
      <Infos>
        <p>Total 24h Volume</p>
        <h3>5</h3>
      </Infos>
      <Infos>
        <p>Total Markets</p>
        <h3>5</h3>
      </Infos>
    </InfosContainer>
  </Wrapper>
)

export default HomeHero
