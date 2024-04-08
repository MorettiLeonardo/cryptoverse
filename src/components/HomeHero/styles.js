import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Title = styled.h1`
  font-size: 32px;
`

export const Wrapper = styled.main`
  padding: 24px;
  background-color: #eee;
`

export const InfosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 16px;
`

export const Infos = styled.div`
  padding: 8px;

  p {
    color: ${colors.gray};
  }

  h3 {
    margin-top: 8px;
    font-weight: 500;
    font-size: 24px;
  }
`

export const CryptoSection = styled.div`
  margin-top: 40px;
`

export const CryptoSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  max-width: max-content;
  border: none;
  font-size: 24px;

  a {
    color: ${colors.lightBlue};
  }
`
