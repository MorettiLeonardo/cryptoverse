import { Link } from 'react-router-dom'
import millify from 'millify'

import { useGetCryptosQuery } from '../../services/cryptoApi'

import {
  Wrapper,
  InfosContainer,
  Infos,
  Title,
  CryptoSection,
  Button,
  CryptoSectionContent
} from './styles'
import Cryptocurrencies from '../ListCoins'
import NewsContent from '../NewsContent'

const HomeHero = () => {
  const { data, isFetching } = useGetCryptosQuery(10)
  const globalState = data?.data?.stats

  if (isFetching) return <h3>Loading...</h3>

  return (
    <Wrapper>
      <Title>Global Crypto Stats</Title>
      <InfosContainer>
        <Infos>
          <p>Total Cryptocurrencies</p>
          <h3>{globalState.total}</h3>
        </Infos>
        <Infos>
          <p>Total Exchanges</p>
          <h3>{millify(globalState.totalExchanges)}</h3>
        </Infos>
        <Infos>
          <p>Total Market Cap</p>
          <h3>{millify(globalState.totalMarketCap)}</h3>
        </Infos>
        <Infos>
          <p>Total 24h Volume</p>
          <h3>{millify(globalState.total24hVolume)}</h3>
        </Infos>
        <Infos>
          <p>Total Markets</p>
          <h3>{millify(globalState.totalMarkets)}</h3>
        </Infos>
      </InfosContainer>
      <CryptoSection>
        <CryptoSectionContent>
          <Title>Top 10 Cryptocurrencies in the world</Title>
          <Button>
            <Link to="/cryptocurrencies">Show more</Link>
          </Button>
        </CryptoSectionContent>
        <Cryptocurrencies simplified />
      </CryptoSection>
      <CryptoSection>
        <CryptoSectionContent>
          <Title>Latest Crypto News</Title>
          <Button>
            <Link to="/news">Show more</Link>
          </Button>
        </CryptoSectionContent>
        <NewsContent />
      </CryptoSection>
    </Wrapper>
  )
}

export default HomeHero
