import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <nav className='navigation'>
        <menu className='navigation-menu container'>
            <li className='navigation-image'><a href="/"><img src={require("../assets/nav-logo.png")} alt="Little Lemon Logo"></img></a></li>
            <li className='navigation-list'><a href="/">Home</a></li>
            <li className='navigation-list'><a href="/about">About</a></li>
            <li className='navigation-list'><a href="/menu">Menu</a></li>
            <li className='navigation-list'><a href="/booking">Reservations</a></li>
            <li className='navigation-list'><a href="/order">Order Online</a></li>
            <li className='navigation-list'><a href="/login">Login</a></li>
        </menu>
      </nav>
  )
}

export default Nav