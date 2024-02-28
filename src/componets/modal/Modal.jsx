import React, { useContext, useState } from 'react'
import css from '../modal/Modal.module.css'
import MyContext from '../../context/data/MyContext'
const Modal = ({ name, address, pincode, number, setName, setAddress, setPincode, setNumber, buyNow }) => {
  const context = useContext(MyContext);
  const { mode } = context;
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }
  if (modal) {
    document.body.classList.add('bodyy')
  } else {
    document.body.classList.remove('bodyy')
  }
  return (<>
    <button className={css.buynowbtn} onClick={toggleModal}> Buy Now</button>
    {modal && (<div className={css.modal}  >
      <div className={css.overlay} onClick={toggleModal}></div>
      <div className={css.form} style={{ backgroundColor: mode === 'dark' ? 'rgb(62,64,66)' : '', color: mode === 'dark' ? 'white' : '' }}>
        <h1>Enter you name</h1>
        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <h1>Enter Full Address</h1>
        <input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
        <h1>Enter Pincode</h1>
        <input type='text' name='pincode' input value={pincode} onChange={(e) => setPincode(e.target.value)} ></input>
        <h1>Enter Contact Number</h1>
        <input type='number' input value={number} name='phonenumber' onChange={(e) => setNumber(e.target.value)} ></input>
        <button className={css.ordernow} onClick={() => { buyNow(), toggleModal }}>
          Order Now
        </button>
      </div>

    </div >)
    }

  </>
  )
}

export default Modal
