import { createGlobalStyle, styled } from 'styled-components'

export const colors = {
  blue: '#00142a',
  lightBlue: '#2588ef',
  black: '#000',
  white: '#fff',
  gray: '#929eb5'
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: flex;
  :last-child {
    flex: 1;
  }
`

export default GlobalStyle
