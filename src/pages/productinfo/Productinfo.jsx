import React, { useContext } from 'react'
import css from '../productinfo/Productinfo.module.css'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import Navbar from '../../componets/navbar/Navbar';
import Footer from '../../componets/Footer/Footer';
import MyContext from '../../context/data/MyContext';
const Productinfo = () => {
  const context = useContext(MyContext)
  const { mode } = context;
  return (<>
    <Navbar />
    <div className={css.main} style={{ backgroundColor: mode === 'dark' ? 'rbg(62,64,66)' : '', color: mode === 'dark' ? 'white' : '' }} >
      <div className={css.section}>
        <div className={css.imgdiv}>
          <img src='https://images-na.ssl-images-amazon.com/images/I/81gvUHwwkOL._AC_UX522_.jpg' className={css.productimg} />
        </div>
        <div className={css.txtdiv}>
          <div className={css.brandname}>
            <h1>Brand Name</h1>
          </div>
          <div className={css.titlename}>
            <h1>Product Name</h1>
          </div>
          <div className={css.ratinglinks}>
            <div className={css.rating}>
              ratingsystem
            </div>
            <div className={css.reviews}>
              4 reviews
            </div>
            <div className={css.fb}>
              <RiFacebookFill className={css.icons} />
              <FaTwitter className={css.icons} />
              <RiInstagramFill className={css.icons} />
            </div>
          </div>
          <div className={css.aboutproduct}>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil ipsam earum commodi sunt quasi! Perspiciatis dolores, debitis repellendus nobis, facilis suscipit doloribus architecto praesentium sunt adipisci in, esse expedita! Consequatur!dolor sit amet consectetur, adipisicing elit. Nihil ipsam earum commodi sunt quasi!</p>
          </div>
          <div className={css.twoinone}>
            <div className={css.price}>
              <h1>₹1,499.00</h1>
            </div>
            <div className={css.btns}>
              <button className={css.addtocartbtn}>Add to cart</button>
              <div className={css.iconmain}>
                <FcLike className={css.loveicon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Productinfo
