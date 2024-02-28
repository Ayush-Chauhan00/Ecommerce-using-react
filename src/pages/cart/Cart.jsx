import React, { useContext, useEffect, useState } from 'react'
import css from '../cart/Cart.module.css'
import { MdDelete } from "react-icons/md";
import Navbar from '../../componets/navbar/Navbar';
import Footer from '../../componets/Footer/Footer';
import MyContext from '../../context/data/MyContext';
import Modal from '../../componets/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromcart } from '../../redux/CartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
const Cart = () => {
  const context = useContext(MyContext);
  const { mode } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart)
  //deleteCartFunction
  const deleteCart = (prodcut) => {
    dispatch((deleteFromcart(prodcut)))
    toast.success("Deleted Successfully")
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])
  const [totalAmout, setTotalAmout] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price)
    })
    setTotalAmout(temp);
  }, [cartItems])
  const Shipping = parseInt(199);
  const grandTotal = totalAmout + Shipping
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [number, setNumber] = useState("");
  const buyNow = async () => {
    if (name === "" || address === "" || pincode === "" || number === "") {
      return toast.error("all fields are required")
    }
    const addressInfo = {
      name,
      address, pincode, number
    }
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )
    // console.log("clicked")
    var options = {
      key: "rzp_test_C4zyPDjDTYZr8F",
      key_secret: "zz11c5d3jyDr3pupLg1vuleX",
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: 'order_rcptid_' + name,
      name: "Chauhan-Mart",
      description: "for testing purpose",
      handler: function (response) {
        // console.log(response)
        toast.success('Payment Successful')
        const paymentId = response.razorpay_payment_id
        //store in database
        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString(
            "en-US",
            {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }
          ),
          email: JSON.parse(localStorage.getItem("user")).user.email,
          userid: JSON.parse(localStorage.getItem("user")).user.uid,
          paymentId
        }

        try {

          const orderRef = collection(fireDB, 'orders')
          addDoc(orderRef, orderInfo)
          console.log("j");
        } catch (error) {
          console.log(error)
        }
      },

      theme: {
        color: "#3399cc"
      }
    };

    var pay = new window.Razorpay(options);
    pay.open();
  }
  return (<>
    <Navbar />
    <div className={css.allmain} style={{ backgroundColor: mode === 'dark' ? 'rgb(62,64,66)' : '', color: mode === 'dark' ? 'white' : '' }}>
      <div className={css.cartsection}>
        {cartItems.map((item, index) => {
          const { title, description, imageUrl, price } = item;
          return (

            <div key={index} className={css.productsummary}>
              <div className={css.onlyProductSummary}>
                <div className={css.productimg}>
                  <img src={imageUrl} className={css.productimg} />
                </div>
                <div className={css.threeinone}>
                  <h1>{title}</h1>
                  <h3>{description}</h3>
                  <p>₹{price}</p>
                </div>
                <div className={css.deleteicon}>
                  <MdDelete className={css.dlticon} onClick={() => deleteCart(item)} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={css.totalbill}>
        <div className={css.box1}>
          <div className={css.subtotal}>
            <div className={css.one}>
              <p>Subtotal</p>
            </div>
            <div className={css.two}>
              ₹{totalAmout}
            </div>
          </div>
          <div className={css.subtotal}>
            <div className={css.one}>
              <p>Shipping</p>
            </div>
            <div className={css.two}>
              ₹{Shipping}
            </div>
          </div>
        </div>
        <div className={css.box2}>
          <div className={css.subtotal}>
            <div className={css.one}>
              <p className={css.total}>Total</p>
            </div>
            <div className={css.two}>
              <p className={css.total}>₹{grandTotal}</p>
            </div>
          </div>
          <Modal name={name}
            address={address}
            pincode={pincode}
            number={number}
            setName={setName}
            setAddress={setAddress}
            setPincode={setPincode}
            setNumber={setNumber}
            buyNow={buyNow}
          />

        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}
export default Cart 
