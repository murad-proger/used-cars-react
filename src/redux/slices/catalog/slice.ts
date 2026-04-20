import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import type { ProductProps } from "../../../@types/productPropsType";
import type { GridViewType } from "../../../@types/gridViewType";

interface catalogState {
  items: ProductProps[];
  status: "loading" | "success" | "error";
  gridView: GridViewType;
  sort: string;
}

interface FetchArgs {
  price: { min: number | null; max: number | null };
  year: { min: number | null; max: number | null };
  displacement: { min: number | null; max: number | null };
  brand: string[];
  bodyType: string[];
}

export const fetchCatalog = createAsyncThunk<ProductProps[], FetchArgs>('items/fetchItemsStatus',
  async (params) => {
    const {
      price,
      year,
      displacement,
      brand,
      bodyType
    } = params

    const priceMin = price.min !== null && price.min >= 0 ? price.max !== null && price.max >= 0 ? `price[from]=${price.min + 1}&` : `price[from]=${price.min}&` : ''
    const priceMax = price.max !== null && price.max >= 0 ? price.min !== null && price.min >= 0 ? `price[to]=${price.max - 0.9}&` : `price[to]=${price.max}&` : ''
    const yearMin = year.min !== null && year.min >= 0 ? year.max !== null && year.max >= 0 ? `year[from]=${year.min + 1}&` : `year[from]=${year.min}&` : ''
    const yearMax = year.max !== null && year.max >= 0 ? year.min !== null && year.min >= 0 ? `year[to]=${year.max - 0.9}&` : `year[to]=${year.max}&` : ''
    const displacementMin = displacement.min !== null && displacement.min >= 0 ? displacement.max !== null && displacement.max >= 0 ? `displacement[from]=${displacement.min + 1}&` : `displacement[from]=${displacement.min}&` : ''
    const displacementMax = displacement.max !== null && displacement.max >= 0 ? displacement.min !== null && displacement.min >= 0 ? `displacement[to]=${displacement.max - 0.9}&` : `displacement[to]=${displacement.max}&` : ''
    const brandArr = brand.length > 0 ? bodyType.length > 0 ? brand.map((item)=> `brand[]=${item}&`) : brand.map((item)=> `brand[]=${item}`).join('&') : ''
    const bodyTypeArr = bodyType.length > 0 ? bodyType.map((item)=> `bodyType[]=${item}`).join('&') : ''
    
    const queryStr = `${priceMin}${priceMax}${yearMin}${yearMax}${displacementMin}${displacementMax}${brandArr}${bodyTypeArr}`;
    

    const response = await axios.get(`https://41576e2fc60efbdd.mokky.dev/items${queryStr.length > 0 ? "?" + queryStr : '' }`)
      .then(res=>res.data)
    return response
  }
)

const initialState: catalogState = {
  items: [],
  status: "loading",
  gridView: "row",
  sort: "popularity",
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    getItems(state, action: PayloadAction<ProductProps[]>) {
      state.items = action.payload
    },
    setGridView(state, action: PayloadAction<GridViewType>) {
      state.gridView = action.payload
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload
      console.log(action.payload);
      
    },
    /*updateCatalogItemProps(
      state,
      action: PayloadAction<{
        productId: number;
        liked?: boolean;
        added?: boolean;
      }>
    ) {
      const item = state.items.find(
        (item) => item.productId === action.payload.productId
      );

      if (item) {
        if (action.payload.liked !== undefined) {
          item.liked = action.payload.liked;
        }
        if (action.payload.added !== undefined) {
          item.added = action.payload.added;
        }
      }
    }*/
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchCatalog.rejected, (state) => {
        state.status = "error";
      });
  }
})

export const {getItems, setGridView, setSort, /*updateCatalogItemProps*/} = catalogSlice.actions
export default catalogSlice.reducer