import React, { useContext } from 'react'
import MyContext from '../../context/data/MyContext'
import css from '../navbar/Navbar.module.css'
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { CiBrightnessUp } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
  const context = useContext(MyContext);
  const { mode, toggle } = context;
  const users = JSON.parse(localStorage.getItem('user'))
  const logOutBtn = () => {
    window.location.href = '/login';
  }
  const cartItems = useSelector((state) => state.cart)
  return (
    <>
      <div className={css.upperheader} >

        <h2>Welcome To Chauhan Mart</h2>
      </div>
      <div className={css.header} style={{ backgroundColor: mode == "dark" ? 'rgb(62,64,66)' : '', color: mode === 'dark' ? 'white ' : '' }}>
        <div className={css.martName}>
          <h1 className={css.martnameheading}>Chauhan Mart</h1>
        </div>
        <div className={css.rightItems}>
          <ol className={css.orderlist}>
            <li><Link to={"./"}>Home</Link></li>
            {users.user.email === 'dikshachn1@gmail.com' ? "" : <li><Link to={"./order"}>Orders</Link></li>}
            <li><Link to={"./allproducts"}>All Products</Link></li>
            {users?.user?.email === 'dikshachn1@gmail.com' ? <li><Link to={"./dashboard"}>Admin</Link></li> : ''}
            {users.user.email === 'dikshachn1@gmail.com' ? <li><Link to={"./"}><button onClick={logOutBtn} className={css.btn}>Logout</button></Link></li> : " "}

            <li><Link to={"./"}><FaRegUserCircle className={css.icons} /></Link></li>
            <li><button onClick={toggle}>{mode === 'dark' ? (<CiBrightnessUp className={css.icons} />) : "light" ? (<MdOutlineDarkMode className={css.icons} />) : ''}</button></li>
            <li><Link to={"./cart"}><IoCartOutline className={css.icons} /></Link></li>
            <span>{cartItems.length}</span>
          </ol>

        </div>
      </div >

    </>
  )
}

export default Navbar
