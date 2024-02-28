import React, { useContext } from 'react'
import css from '../testimonials/Testimonials.module.css'
import MyContext from '../../context/data/MyContext'
function Testimonails() {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <div className={css.section} style={{ backgroundColor: mode === 'dark' ? 'rgba(62,64,66)' : ' ', color: mode === 'dark' ? 'white' : '' }}>
      <div className={css.testimonialHeading}>
        <h1>Testimonials</h1>
        <div className={css.text}>
          <p>What our </p>
          <p className={css.customer}>customers </p>
          <p>are saying</p>
        </div>
      </div>
      <div className={css.reviewcontainer}>
        <div className={css.reviews}>
          <div className={css.imgcontainer}> </div>
          <div className={css.txtreview}>
            <p className={css.txtt}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit deleniti debitis necessitatibus corporis nemo, itaque voluptas. Dicta aut necessitatibus officia tempore eos asperiores minus, neque rerum maxime expedita officiis?</p>
          </div>
          <div className={css.underline}>  </div>
          <div className={css.name}>
            <h1>Ayush Chauhan</h1>
            <h6>Senior Product Designer</h6>
          </div>
        </div>
        <div className={css.reviews}>
          <div className={css.imgcontainer}>  <img src='diksha.jpg' className={css.dikimg}></img> </div>
          <div className={css.txtreview}>
            <p className={css.txtt}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit deleniti debitis necessitatibus corporis nemo, itaque voluptas. Dicta aut necessitatibus officia tempore eos asperiores minus, neque rerum maxime expedita officiis?</p>
          </div>
          <div className={css.underline}>  </div>
          <div className={css.name}>
            <h1>Diksha Chauhan</h1>
            <h6>Senior Project Developer</h6>
          </div>
        </div>
        <div className={css.reviews}>
          <div className={css.imgcontainer}> </div>
          <div className={css.txtreview}>
            <p className={css.txtt}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit deleniti debitis necessitatibus corporis nemo, itaque voluptas. Dicta aut necessitatibus officia tempore eos asperiores minus, neque rerum maxime expedita officiis?</p>
          </div>
          <div className={css.underline}>  </div>
          <div className={css.name}>
            <h1>Ayush Chauhan</h1>
            <h6>Senior Product Designer</h6>
          </div>
        </div>
        <div className={css.reviews}>
          <div className={css.imgcontainer}>
          </div>
          <div className={css.txtreview}>
            <p className={css.txtt}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit deleniti debitis necessitatibus corporis nemo, itaque voluptas. Dicta aut necessitatibus officia tempore eos asperiores minus, neque rerum maxime expedita officiis?</p>
          </div>
          <div className={css.underline}>  </div>
          <div className={css.name}>
            <h1>Ayush Chauhan</h1>
            <h6>Senior Product Designer</h6>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Testimonails
