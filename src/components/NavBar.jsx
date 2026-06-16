import react from 'react'
import NavLink from '../constants/index.js'

const NavBar = () => {
  return(
    <header>
      <nav>
        <img src="/logo.svg" alt="apple logo" />
        <ul>
          {NavLink.map(({label}) => (
          <li key={label}>
            <a href={label}>{label}</a>
          </li>
          ))
          }
        </ul>
        <div class="flex-center gap-3">
          <button>
            <img src="/public/search.svg" alt="search" />
          </button>
          <button>
            <img src="/public/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
    )
}

export default NavBar;