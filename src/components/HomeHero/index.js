import millify from 'millify'

import { useGetCryptosQuery } from '../../services/cryptoApi'

import { Wrapper, InfosContainer, Infos } from './styles'

const HomeHero = () => {
  const { data, isFetching } = useGetCryptosQuery()
  const globalState = data?.data?.stats

  console.log(data)
  console.log(isFetching)

  if (isFetching) return <h3>Loading...</h3>

  return (
    <Wrapper>
      <h1>Global Crypto Stats</h1>
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
    </Wrapper>
  )
}

export default HomeHero
