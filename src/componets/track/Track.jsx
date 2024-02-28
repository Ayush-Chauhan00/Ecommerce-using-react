import React, { useContext } from 'react'
import css from '../track/Track.module.css'
import { CgShoppingBag } from "react-icons/cg";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import MyContext from '../../context/data/MyContext';
const Track = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <div className={css.trackcontainer} style={{ backgroundColor: mode === 'dark' ? 'rgba(62,64,66)' : ' ', color: mode === 'dark' ? 'white' : '' }}>
      <div className={css.track1} style={{ backgroundColor: mode === 'dark' ? 'rgba(62,64,66)' : ' ', color: mode === 'dark' ? 'white' : '' }}>
        <div className={css.icon}>
          <CgShoppingBag className={css.bagIcon} />
        </div>
        <div className={css.tracktitle}>
          <h1>Premium T-Shirts</h1>
        </div>
        <div className={css.trackpara}>
          <p>Our T-shirts are 100% made of cotton</p>
        </div>
      </div>
      < div className={css.track1} style={{ backgroundColor: mode === 'dark' ? 'rgba(62,64,66)' : ' ', color: mode === 'dark' ? 'white' : '' }}>
        <div className={css.icon}>
          <LiaShippingFastSolid className={css.bagIcon} />
        </div>
        <div className={css.tracktitle}>
          <h1>Free Shipping</h1>
        </div>
        <div className={css.trackpara}>
          <p>We ship all over India for free</p>
        </div>
      </div>
      < div className={css.track1} style={{ backgroundColor: mode === 'dark' ? 'rgba(62,64,66)' : ' ', color: mode === 'dark' ? 'white' : '' }}>
        <div className={css.icon}>
          <HiOutlineCurrencyRupee className={css.bagIcon} />
        </div>
        <div className={css.tracktitle}>
          <h1>Amazing Offers</h1>
        </div>
        <div className={css.trackpara}>
          <p>We provides amazing offers & discounts</p>
        </div>
      </div>


    </div>
  )
}

export default Track
