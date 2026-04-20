import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";

import type { ProductCardProps } from '../../../@types/ProductCardProps';

const data = localStorage.getItem("favourites")
const items = data ? JSON.parse(data) : []

interface FavouritesSliceState {
  items: ProductCardProps[];
}

const initialState: FavouritesSliceState = {
  items: items,
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addLikedItem(state, action: PayloadAction<ProductCardProps>) {
      const findItem = state.items.find(item=>item.productId === action.payload.productId)
      if(!findItem) {
        state.items.push(action.payload)
      }
    },
    removeLikedItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item=>item.productId !== action.payload)
    }
  },
})

export const {addLikedItem, removeLikedItem} = favouritesSlice.actions
export default favouritesSlice.reducer