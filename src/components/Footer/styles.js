import { styled } from 'styled-components'
import { colors } from '../../../styles'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px;
  background-color: ${colors.blue};

  h3 {
    color: ${colors.white};
  }

  ul {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }
`
