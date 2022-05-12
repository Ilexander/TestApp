import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { arrayMin } from "../scripts/scripts";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function () {
    try {
      const resp = await fetch(
        "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e"
      );

      const data = await resp.json();
      return data;
    } catch (error) {}
  }
);

type CounterState = {
  products: any;
  currentProduct: any;
};

const initialState: CounterState = {
  products: [],
  currentProduct: [],
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getMinPrice(state) {
      state.currentProduct = [arrayMin(state.products)];
    },
    getCurrentProduct(state, action) {
      state.currentProduct = state.products.filter((item: any) => {
        return item.name === action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = state.products.concat(action.payload);
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { getMinPrice, getCurrentProduct } = productSlice.actions;

export default productSlice.reducer;
