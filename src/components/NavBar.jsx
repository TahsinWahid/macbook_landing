import react from 'react'
import {navlinks} from '../constants/index.js'

const NavBar = () => {
  return(
    <header>
      <nav>
        <img src="/logo.svg" alt="apple logo" />
        <ul>
          {navlinks.map(({label}) => (
          <li key={label}>
            <a href={label}>{label}</a>
          </li>
          ))}
        </ul>
        <div class="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="search" />
          </button>
          <button>
            <img src="/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
    )
}

export default NavBar;