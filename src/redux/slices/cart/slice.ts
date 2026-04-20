import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";

import type { CartItem } from '../../../@types/cart';

const data = localStorage.getItem("cart")
const items: CartItem[] = data ? JSON.parse(data) : []

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: items,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, 'count'>>) {
      const findItem = state.items.find(item=>item.productId === action.payload.productId)
      if(!findItem) {
        state.items.push({
          ...action.payload,
          count: 1
        }) 
      }
    },
    minusItem(state, action: PayloadAction<number>) {
      const item = state.items.find(
        item => item.productId === action.payload
      );

      if (item && item.count > 1) {
        item.count -= 1;
        localStorage.setItem("cart", JSON.stringify(state.items))
      }
    },
    plusItem(state, action: PayloadAction<number>) {
      const item = state.items.find(
        item => item.productId === action.payload
      );

      if (item) {
        item.count += 1;
        localStorage.setItem("cart", JSON.stringify(state.items))
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item=>item.productId !== action.payload)
      localStorage.setItem("cart", JSON.stringify(state.items))
    },
    cleanCart(state) {
      state.items = []
      localStorage.setItem("cart", JSON.stringify(state.items))
    }
  },
})

export const {addItem, removeItem, minusItem, plusItem, cleanCart} = cartSlice.actions
export default cartSlice.reducer