import { Route, Routes } from 'react-router-dom'
import App from './App'

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<App />} />
  </Routes>
)

export default RoutesConfig
