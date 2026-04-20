import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductProps } from "../../../@types/productPropsType"; 
import type { Brands, FilterMinMax, ChoosedBrands, BodyType } from "../../../@types/filters";

interface filtersState {
  price: FilterMinMax;
  year: FilterMinMax;
  displacement: FilterMinMax;
  brands: Brands;
  choosedBrands: ChoosedBrands;
  bodyTypes: BodyType[];
  choosedBodyTypes: string[];
}

const initialState: filtersState = {
  price: {
    min: null,
    max: null
  },
  year: {
    min: null,
    max: null
  },
  displacement: {
    min: null,
    max: null
  },
  brands: [],
  choosedBrands: [],
  bodyTypes: [],
  choosedBodyTypes: []
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPriceMin(state, action: PayloadAction<number | null>) {
      state.price.min = action.payload
    },
    setPriceMax(state, action: PayloadAction<number | null>) {
      state.price.max = action.payload
    },
    setYearMin(state, action: PayloadAction<number | null>) {
      state.year.min = action.payload
    },
    setYearMax(state, action: PayloadAction<number | null>) {
      state.year.max = action.payload
    },
    setDisplacementMin(state, action: PayloadAction<number | null>) {
      state.displacement.min = action.payload
    },
    setDisplacementMax(state, action: PayloadAction<number | null>) {
      state.displacement.max = action.payload
    },
    brandsFilterstState(state, action: PayloadAction<ProductProps[]>) {
      if(state.brands.length > 0) return
      const brandsArr = [...new Set(action.payload.map(({brand}) => brand))]
      state.brands = brandsArr.map(name => ({
        name,
        isSelected: false
      }))
    },
    filterBrands(state, action: PayloadAction<string>) {
      state.brands = state.brands.map(brand => brand.name === action.payload
      ? {...brand, isSelected: !brand.isSelected} : brand)
    },
    bodyTypesFilterState(state, action: PayloadAction<ProductProps[]>) {
      if (state.bodyTypes.length > 0) return;

      const typesArr = [...new Set(action.payload.map(({ bodyType }) => bodyType))];
      state.bodyTypes = typesArr.map(name => ({
        name,
        isSelected: false
      }));
    },
    filterBodyType(state, action: PayloadAction<string>) {
      state.bodyTypes = state.bodyTypes.map(bt =>
        bt.name === action.payload ? { ...bt, isSelected: !bt.isSelected } : bt
      );
    }
  }
})

export const {filterBrands, brandsFilterstState, setPriceMin, setPriceMax, setYearMin, setYearMax, setDisplacementMin, setDisplacementMax, bodyTypesFilterState, filterBodyType} = filtersSlice.actions
export default filtersSlice.reducer