import React from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import './Nav.css'

function Nav() {
  return (
    <nav className='navigation'>
        <menu className='menu container'>
            <Link to="/"><img className='logo' src={require("../assets/nav-logo.png")} alt="Little Lemon Logo"></img></Link>
            <Burger />
        </menu>
    </nav>
  )
}

export default Nav