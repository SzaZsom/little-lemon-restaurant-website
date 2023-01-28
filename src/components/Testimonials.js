import React from 'react';
import "./Testimonials.css"

function Testimonials() {
  return (
    <section className='testimonials'>
      <article className='container'>
        <div className='testimonial_title_container'>
          <h1 className='testimonials_title'>Testimonials</h1>
        </div>
        <div className='testimonials_ratings'>
          <div className='testimonials_rating_card'>
            <h2>Rating</h2>
            <p>⭐⭐⭐⭐</p>
          </div>
          <div className='testimonials_rating_card'>
            <h2>Rating</h2>
            <p>⭐⭐⭐⭐</p>
          </div>
          <div className='testimonials_rating_card'>
            <h2>Rating</h2>
            <p>⭐⭐⭐⭐</p>
          </div>
          <div className='testimonials_rating_card'>
            <h2>Rating</h2>
            <p>⭐⭐⭐⭐</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Testimonials