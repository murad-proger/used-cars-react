import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import catalog from './slices/catalog/slice'
import filters from './slices/filters/slice'
import product from './slices/product/slice'
import cart from './slices/cart/slice'
import favourites from './slices/favourites/slice'
import orders from './slices/orders/slice'

export const store = configureStore({
  reducer: {
    catalog,
    filters,
    product,
    cart,
    favourites,
    orders
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()