import { IoMdHome } from 'react-icons/io'
import { GoGraph } from 'react-icons/go'
import { MdOutlineLightbulb } from 'react-icons/md'
import { TbNews } from 'react-icons/tb'

import { Sidebar, List } from './styles'

const Navbar = () => (
  <Sidebar>
    <h1>Crytoverse</h1>
    <nav>
      <List>
        <li>
          <a href="#">
            <IoMdHome /> Home
          </a>
        </li>
        <li>
          <a href="#">
            <GoGraph /> Cryptocurrencies
          </a>
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
