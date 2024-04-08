import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from './routes'

import store from './store'
import { Provider } from 'react-redux'

import GlobalStyle from './styles'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesConfig />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  )
}

export default App
