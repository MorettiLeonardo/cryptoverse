import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2px;
  }
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${colors.white};
  height: 230px;
  cursor: pointer;
  transition: 0.1s ease-in;

  img {
    max-width: 40px;
    max-height: 40px;
  }

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 600;
  }
`

export const Border = styled.div`
  height: 1px;
  min-width: max-content;
  background-color: ${colors.gray};
  margin: 20px 0;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 22px;
  gap: 12px;
`
