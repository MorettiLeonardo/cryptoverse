import { useState, useEffect } from 'react'
import millify from 'millify'

import { useGetCryptosQuery } from '../../services/cryptoApi'

import {
  Card,
  Container,
  CardHeader,
  CardBody,
  Border,
  InputSearch
} from './styles'
import Loader from '../Loader'

const ListCoins = ({ simplified }) => {
  const count = simplified ? 10 : 100
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setCryptos(filteredData)
  }, [cryptoList, searchTerm])

  if (isFetching) return <Loader />

  return (
    <section>
      <Container>
        {!simplified && (
          <InputSearch>
            <input
              type="text"
              placeholder="Search Cryptocurrencie"
              onChange={(ev) => setSearchTerm(ev.target.value)}
            />
          </InputSearch>
        )}
        <ul>
          {cryptos?.map((coin) => (
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
    </section>
  )
}

export default ListCoins
