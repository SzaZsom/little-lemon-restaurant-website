import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
      <menu className='container footer_container'>
        <img className='footer_logo' src={require('../assets/footer-logo.png')} alt='Footer Logo' />
        <div className='footer_blocks'>
          <h1>Navigation</h1>
            <nav>
              <ul className='footer_navigation'>
                <li className='footer_navigation-list-item'>Home</li>
                <li className='footer_navigation-list-item'>About</li>
                <li className='footer_navigation-list-item'>Menu</li>
                <li className='footer_navigation-list-item'>Reservations</li>
                <li className='footer_navigation-list-item'>Order Online</li>
                <li className='footer_navigation-list-item'>Login</li>
              </ul>
            </nav>
        </div>
        <div>
          <h1>Contact</h1>
          <div>
            <ul className='footer_navigation'>
              <li className='footer_navigation-list-item'>Address</li>
              <li className='footer_navigation-list-item'>Phone Number</li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Social media</h1>
          <div className='footer_icons'>
            <img src={require("../assets/facebook-icon.png")} alt='Facebook Icon' />
            <img src={require("../assets/instagram-icon.png")} alt='Instagram Icon' />
          </div>
        </div>
      </menu>
    </footer>
  )
}

export default Footer