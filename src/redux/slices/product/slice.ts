import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { ProductProps } from "../../../@types/productPropsType";
// import { updateCatalogItemProps } from "../catalog/slice";

interface ProductState {
  product: ProductProps | null;
  status: "loading" | "success" | "error";
}

export const fetchProduct = createAsyncThunk<
  ProductProps, { productId: number }>("product/fetchProduct",
  async ({ productId }) => {
    const res = await axios.get<ProductProps>(
      `https://41576e2fc60efbdd.mokky.dev/items/${productId}`
    );

    return res.data;
  }
);
/*
type SettingProps = {
  liked?: boolean,
  added?: boolean 
}

interface SetProductProps {
  productId: number
  isLiked?: boolean
  isAdded?: boolean
}

export const setProductProps = createAsyncThunk("product/setProductProps",
  async ({ productId, isLiked, isAdded }: SetProductProps, { dispatch }) => {
    const props: SettingProps = {}
    
    if (isLiked !== undefined) props.liked = isLiked;
    if (isAdded !== undefined) props.added = isAdded;

    const res = await axios.patch<ProductProps>(
      `https://41576e2fc60efbdd.mokky.dev/items/${productId}`,
      props
    );

    dispatch(
      updateCatalogItemProps({
        productId,
        liked: res.data.liked,
        added: res.data.added,
      })
    );
    
    return res.data;
  }
);
*/
const initialState: ProductState = {
  product: null,
  status: "loading",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.status = "success";
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.status = "error";
      })
      /*.addCase(setProductProps.pending, () => {})
      .addCase(setProductProps.fulfilled, (state, action) => {
        if (state.product) {
          state.product.liked = action.payload.liked;
          state.product.added = action.payload.added;
        }
      })
      .addCase(setProductProps.rejected, (state) => {
        state.status = "error";
      })*/
  },
});

export default productSlice.reducer;