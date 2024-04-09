import { styled } from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  background-color: #eee;
  padding: 24px;
  min-height: 80vh;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 16px;
  }
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${colors.white};
  height: 230px;
  cursor: pointer;
  transition: 0.4s;

  img {
    max-width: 40px;
    max-height: 40px;
  }

  &:hover {
    box-shadow:
      rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
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

export const InputSearch = styled.div`
  text-align: center;

  input {
    border: none;
    margin-bottom: 16px;
    width: 365px;
    height: 50px;
    padding: 0 14px;
  }
`
