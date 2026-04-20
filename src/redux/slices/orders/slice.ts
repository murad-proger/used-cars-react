import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";

import type { Order } from "../../../@types/order";

const data = localStorage.getItem("orders")
const orders: Order[] = data ? JSON.parse(data) : []

interface ordersState {
  orders: Order[]
}

const initialState: ordersState = {
  orders: orders
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload)
      localStorage.setItem("orders", JSON.stringify(state.orders))
    }
  },
})

export const {setOrder} = ordersSlice.actions
export default ordersSlice.reducer