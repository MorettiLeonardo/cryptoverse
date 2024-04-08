import { Link } from 'react-router-dom'

import { IoMdHome } from 'react-icons/io'
import { GoGraph } from 'react-icons/go'
import { MdOutlineLightbulb } from 'react-icons/md'
import { TbNews } from 'react-icons/tb'

import { Sidebar, List } from './styles'

const Navbar = () => (
  <Sidebar>
    <h1>Cryptoverse</h1>
    <nav>
      <List>
        <li>
          <Link to="/">
            <IoMdHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/cryptocurrencies">
            <GoGraph /> Cryptocurrencies
          </Link>
        </li>
        <li>
          <a href="#">
            <TbNews />
            Exchanges
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineLightbulb /> News
          </a>
        </li>
      </List>
    </nav>
  </Sidebar>
)

export default Navbar
