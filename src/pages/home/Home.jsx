import React from 'react'
import Layout from '../../componets/layout/Layout';
import Herosection from '../../componets/herosection/Herosection';
import Filter from '../../componets/filter/Filter';
import Productcard from '../../componets/product card/Productcard';
import Testimonails from '../../componets/testimonials/Testimonails';
import Track from '../../componets/track/Track';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, deleteFromcart } from '../../redux/CartSlice';

const Home = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const addcart = () => {
    dispatch(addTocart("BRAND NEW"))
  }
  const deletecart = () => {
    dispatch(deleteFromcart("shirts"))
  }
  return (<>
    <Layout>
      <Herosection />
      <Filter />
      <Productcard />
      <Track />
      <Testimonails />
    </Layout>
  </>
  )
}

export default Home
