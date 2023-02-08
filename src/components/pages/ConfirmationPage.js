import React from 'react'
import { Link } from 'react-router-dom'
import "./ConfirmationPage.css"

function ConfirmationPage() {
  return (
    <header className="container confirmation-header">
        <img className="confirmation-image" src={require('../../assets/food.jpg')} alt="Little Lemon Ingredients"></img>
        <div class="confirmation--text">
            <section className="reserve-header-text">
                <h1 className='heading_title'>Your Reservation is Confirmed!</h1>
                <h4 className='heading_subTitle'>A confirmation message has been sent to your email.</h4>
                <h4 className='heading_subTitle heading_subTitle--thanks'>Thanks for dining with us!</h4>
            </section>
            <section className="redirect-buttons">
                <Link className="btn btn--noDecortion" to="/">Home Page</Link>
            </section>
        </div>
    </header>
  )
}

export default ConfirmationPage