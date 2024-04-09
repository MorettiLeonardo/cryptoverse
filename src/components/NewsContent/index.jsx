import React from 'react'
import { useGetCryptosNewsQuery } from '../../services/cryptoNewsApi'
import { Container, NewsCard } from './styles'
import Loader from '../Loader'

const NewsContent = ({ renderAll }) => {
  const { data: cryptoNews, isLoading } = useGetCryptosNewsQuery({
    lr: 'en-US',
    keyword: 'cryptocurrency'
  })

  const getDescription = (description) => {
    if (description.length > 195) {
      return description.slice(0, 190) + '...'
    }
    return description
  }

  if (isLoading) return <Loader />

  const itemsToRender = renderAll
    ? cryptoNews?.items
    : cryptoNews?.items.slice(0, 10)

  return (
    <Container>
      {itemsToRender?.map((item) => (
        <NewsCard href={item.newsUrl} key={item.timestamp} target="_blank">
          <img src={item.images.thumbnailProxied} alt="New" />
          <h2>{item.title}</h2>
          <p>{getDescription(item.snippet)}</p>
        </NewsCard>
      ))}
    </Container>
  )
}

export default NewsContent
