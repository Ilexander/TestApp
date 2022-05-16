import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { arrayMin } from "../scripts/scripts";

type Products = {
  price: string;
  category: string;
  name: string;
};

export const fetchProducts = createAsyncThunk<Products[]>(
  "products/fetchProducts",
  async function () {
    const resp = await fetch(
      "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e"
    );
    const data = await resp.json();
    return data;
  }
);

type ProductState = {
  products: Products[];
  currentProduct: Products[];
};

const initialState: ProductState = {
  products: [],
  currentProduct: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getMinPrice(state) {
      state.currentProduct = [arrayMin(state.products)];
    },
    getCurrentProduct(state, action: PayloadAction<string>) {
      state.currentProduct = state.products.filter((item) => {
        return item.name === action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Products[]>) => {
        state.products = state.products.concat(action.payload);
      }
    );
  },
});

export const { getMinPrice, getCurrentProduct } = productSlice.actions;

export default productSlice.reducer;
