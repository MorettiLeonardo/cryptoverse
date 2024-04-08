import { useState } from 'react'
import millify from 'millify'

import { useGetCryptosQuery } from '../../services/cryptoApi'

import { Card, Container, CardHeader, CardBody, Border } from './styles'

const Cryptocurrencies = () => {
  // eslint-disable-next-line no-unused-vars
  const { data: cryptoList, isFetching } = useGetCryptosQuery()
  // eslint-disable-next-line no-unused-vars
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins)

  console.log(cryptos)

  return (
    <div>
      <Container>
        <ul>
          {cryptos.map((coin) => (
            <Card key={coin.id}>
              <CardHeader>
                <p>
                  {coin.rank}. {coin.name}
                </p>
                <img src={coin.iconUrl} alt={coin.name} />
              </CardHeader>
              <Border />
              <CardBody>
                <p>
                  Price: <span>{millify(coin.price)}</span>
                </p>
                <p>
                  Market Cap: <span>{millify(coin.marketCap)}</span>
                </p>
                <p>
                  Daily Change: <span>{millify(coin.change)}%</span>
                </p>
              </CardBody>
            </Card>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default Cryptocurrencies
