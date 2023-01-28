import React from 'react';
import "./About.css"

function About() {
  return (
    <section className='about'>
      <article className='container'>
        <div className='about_container'>
          <div className='about_text'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div className='about_image'>
            <img className='upper' src={require("../assets/Mario and Adrian b.jpg")} alt="Restaurant MArio and Adrian" />
          </div>
        </div>
      </article>
    </section>
  )
}

export default About