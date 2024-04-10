import { Link } from 'react-router-dom'

import { IoMdHome } from 'react-icons/io'
import { GoGraph } from 'react-icons/go'
import { MdOutlineLightbulb } from 'react-icons/md'
import { TbNews } from 'react-icons/tb'

import logo from '../../assets/images/logo.png'

import { Sidebar, List, Logo } from './styles'

const Navbar = () => (
  <Sidebar>
    <Link to="/">
      <Logo>
        <img src={logo} alt="Logo" />
        <h1>Cryptoverse</h1>
      </Logo>
    </Link>
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
          <Link to="/news">
            <MdOutlineLightbulb /> News
          </Link>
        </li>
      </List>
    </nav>
  </Sidebar>
)

export default Navbar
