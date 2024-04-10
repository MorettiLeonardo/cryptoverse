import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Sidebar = styled.aside`
  background-color: ${colors.blue};
  min-height: 100%;
  max-width: 350px;
  width: 100%;
  padding: 24px;
`

export const List = styled.ul`
  margin-top: 32px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 32px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${colors.gray};
    transition: 0.4s;

    &:hover {
      color: ${colors.lightBlue};
    }
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    border-radius: 50%;
    max-width: 40px;
  }

  color: ${colors.lightBlue};
  text-align: center;
`
