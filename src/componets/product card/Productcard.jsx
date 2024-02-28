import React, { useContext, useEffect } from 'react'
import css from '../product card/Productcard.module.css'
import MyContext from '../../context/data/MyContext'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart } from '../../redux/CartSlice'

const Productcard = () => {
  const context = useContext(MyContext);
  const { mode, product, } = context;
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  //console.log(cartItems);
  const addCart = (product) => {
    dispatch(addTocart(product))
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <div className={css.productcardContainer} style={{ backgroundColor: mode === 'dark' ? 'rgb(62,64,66)' : '', color: mode === 'dark' ? 'white' : '' }}>

      <h1>Our Latest Collection</h1>
      <div className={css.underline}></div>
      <div className={css.cardParent}>
        <div className={css.cardcover}>
          {product.map((item, index) => {
            const { title, price, imageUrl, category, time } = item;
            return (
              <div key={index} className={css.productcard}>
                <div className={css.imgcontainer}>
                  <img src={imageUrl} className={css.imgg}></img>
                </div>
                <div className={css.productinfo}>
                  <div className={css.chauhanmart}><p className={css.martname}>{title}</p></div>
                  <div className={css.chauhanmart}><p className={css.title}>{category}</p></div>
                  <div className={css.chauhanmart}><p className={css.price}>₹{price}</p></div>
                </div>
                <button className={css.btn} onClick={() => addCart(item)}>Add To Cart</button>
              </div>
            )
          })}


        </div>
      </div>
    </div>



  )

}

export default Productcard



