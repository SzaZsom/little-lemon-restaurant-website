import React from 'react'
import "./RightNav.css"

const RightNav = ({ open }) => {

  return (
    <ul open={open} className='rightNav' style={{
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
        }}>
        <li><a className='link' href="/">About</a></li>
        <li><a className='link' href="/about">About</a></li>
        <li><a className='link' href="/menu">Menu</a></li>
        <li><a className='link' href="/booking">Reservations</a></li>
        <li><a className='link' href="/order">Order Online</a></li>
        <li><a className='link' href="/login">Login</a></li>
    </ul>
  )
}

export default RightNav