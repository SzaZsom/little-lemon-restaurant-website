import React from 'react'
import Burger from './Burger'
import './Nav.css'

function Nav() {
  return (
    <nav className='navigation'>
        <menu className='menu container'>
            <li><a href="/"><img className='logo' src={require("../assets/nav-logo.png")} alt="Little Lemon Logo"></img></a></li>
            <Burger />
        </menu>
    </nav>
  )
}

export default Nav