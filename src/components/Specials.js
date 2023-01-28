import React from 'react'
import "./Specials.css"

function Specials() {
  return (
    <section className='specials'>
      <article className='container'>
        <div className='specials_heading'>
          <h1 className='specials_title'>This weeks Specials!</h1>
          <button className='specials_cta'>Online Menu</button>
        </div>
        <div className='specials_content'>
          <div className='specials_card'>
            <img src={require('../assets/greek-salad.jpg')} alt='Greek Salad'/>
            <div className='card_container'>
              <div className='card_title'>
                <h2>Greek Salad</h2>
                <h2 className='price'>$12.99</h2>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <h2>Order a delivery 🚕</h2>
            </div>
          </div>
          <div className='specials_card'>
            <img src={require('../assets/greek-salad.jpg')} alt='Greek Salad'/>
            <div className='card_container'>
              <div className='card_title'>
                <h2>Greek Salad</h2>
                <h2 className='price'>$12.99</h2>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <h2>Order a delivery 🚕</h2>
            </div>
          </div>
          <div className='specials_card'>
            <img src={require('../assets/greek-salad.jpg')} alt='Greek Salad'/>
            <div className='card_container'>
              <div className='card_title'>
                <h2>Greek Salad</h2>
                <h2 className='price'>$12.99</h2>
              </div>
              <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
              <h2>Order a delivery 🚕</h2>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Specials