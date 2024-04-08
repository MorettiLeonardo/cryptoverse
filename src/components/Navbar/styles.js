import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Sidebar = styled.aside`
  background-color: ${colors.blue};
  height: 100vh;
  max-width: 350px;
  width: 100%;
  padding: 24px;

  h1 {
    color: ${colors.lightBlue};
    text-align: center;
  }
`

export const List = styled.ul`
  margin-top: 32px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 24px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${colors.gray};
  }
`
