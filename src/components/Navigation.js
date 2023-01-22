import React from 'react'

function Navigation() {
  return (
    <nav>
        <menu className='navigation-menu'>
            <li className='navigation-image'><img src={require("../assets/nav-logo.png")} alt="Little Lemon Logo"></img></li>
            <li className='navigation-list'>Home</li>
            <li className='navigation-list'>About</li>
            <li className='navigation-list'>Menu</li>
            <li className='navigation-list'>Reservations</li>
            <li className='navigation-list'>Order Online</li>
            <li className='navigation-list'>Login</li>
        </menu>
      </nav>
  )
}

export default Navigation