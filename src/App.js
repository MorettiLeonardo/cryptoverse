import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from './routes'
import GlobalStyle from './styles'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesConfig />
        <GlobalStyle />
      </BrowserRouter>
    </>
  )
}

export default App
