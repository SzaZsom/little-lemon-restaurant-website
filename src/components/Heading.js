import React from 'react';
import "./Heading.css";

function Heading() {
  return (
    <header className='heading'>
      <section className='container heading_container'>
        <article className='heading_text'>
            <h1 className='heading_title'>Little Lemon</h1>
            <h3 className='heading_subTitle'>Chicago</h3>
            <h5 className='heading_description'>We are a family owned Mediterranean restaurant, on traditional recipes served with a modern twist.</h5>
            <button className='heading_callToAction'>Reserve a table</button>
        </article>
        <div className='image_container'>
          <img className='heading_img' src={require('../assets/food.jpg')} alt='Little Lemon Hero Pic' />
        </div>
      </section>
    </header>
  )
}

export default Heading