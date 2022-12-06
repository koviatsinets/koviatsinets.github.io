import { createSlice } from '@reduxjs/toolkit';

import productsArr from '../products.json';

const initialState={
  products: productsArr,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    productDelete: (state,action) => {
      const obj = action.payload
      console.log(state.products)
      console.log(obj)
      return obj;
    },
  }
});

export const { productDelete } = productsSlice.actions;

export default productsSlice.reducer;

