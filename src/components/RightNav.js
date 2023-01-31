import React from 'react'
import { Link } from 'react-router-dom'
import "./RightNav.css"

const RightNav = ({ open }) => {

  return (
    <ul open={open} className='rightNav' style={{
            transform: open ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out',
        }}>
        <Link className='link'  to="/">Home</Link>
        <Link className='link'  to="/about">About</Link>
        <Link className='link'  to="/menu">Menu</Link>
        <Link className='link'  to="/booking">Reservations</Link>
        <Link className='link'  to="/order">Order Online</Link>
        <Link className='link' to="/login">Login</Link>
    </ul>
  )
}

export default RightNav