import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import './styles.css'
import { ContextStore } from '../Context/ContextStore'
function Header() {
  const { cart } = useContext(ContextStore)
  return (
    <div className="HeaderContainer">
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
