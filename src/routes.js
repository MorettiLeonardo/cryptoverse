import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cryptocurrencies from './pages/Cryptocurrencies'
import News from './pages/News'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
    <Route path="/news" element={<News />} />
  </Routes>
)

export default RoutesConfig
