import { createSlice } from '@reduxjs/toolkit';

import productsArr from '../products.json';

const initialState={
  products: productsArr,
  filter: {
    themeCity: false,
    themeDuplo: false,
    themeFriends: false,
    ageTypeOne: false,
    ageTypeTwo: false,
    ageTypeThree: false,
    detailsFrom: null,
    detailsTo: Infinity,
    priceFrom: null,
    priceTo: Infinity,
  },
  cart: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    addInCart: (state, action) => {
      state.cart.push(action.payload)
    },

    deleteFromCart: (state, action) => {
      const index = state.cart.findIndex(el => el.id === action.payload)
      state.cart.splice(index, 1)
    }
  }


    
});

export const { addInCart, deleteFromCart } = productsSlice.actions;

export default productsSlice.reducer;

