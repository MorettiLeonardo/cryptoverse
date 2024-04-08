import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cryptocurrencies from './pages/Cryptocurrencies'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
  </Routes>
)

export default RoutesConfig
