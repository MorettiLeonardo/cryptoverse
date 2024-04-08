import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from './routes'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </>
  )
}

export default App
