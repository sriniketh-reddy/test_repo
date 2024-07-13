import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="nav">
    <li className="logo-item">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav-logo"
      />
    </li>
    <li className="link-item">
      Home
      <Link to="/" className="link">
        Home
      </Link>
    </li>
    <li className="link-item">
      Products
      <Link to="/products" className="link">
        Products
      </Link>
    </li>
    <li className="link-item">
      Cart
      <Link to="/cart" className="link">
        Cart
      </Link>
    </li>
    <li>
      <button type="button" className="nav-button">
        Logout
      </button>
    </li>
  </ul>
)

export default Header
