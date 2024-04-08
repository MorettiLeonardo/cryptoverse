import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Wrapper = styled.main`
  padding: 24px;

  h1 {
    font-size: 40px;
    font-weight: 500;
  }
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
