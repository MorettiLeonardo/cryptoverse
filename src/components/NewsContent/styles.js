import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`

export const NewsCard = styled.a`
  background-color: ${colors.white};
  padding: 16px;
  color: ${colors.black};
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
  }

  &:hover {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`
