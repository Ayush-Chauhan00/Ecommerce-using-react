import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart(state, action) {
      state.push(action.payload);
    },
    deleteFromcart(state, action) {
      return state.filter(item => item.id != action.payload.id)
    }
  },
})
export const { addTocart, deleteFromcart } = CartSlice.actions;
export default CartSlice.reducer; 