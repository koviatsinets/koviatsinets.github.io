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

    // setFilter: (state,action) => {
    //   state.filter = action.payload
    // },

    addInCart: (state, action) => {
      console.log('Добавил в redux')
      state.cart.push(action.payload)
    },

    deleteFromCart: (state, action) => {
      console.log('Удалил в redux')
      console.log(action.payload)
    }
  }


    
});

export const { addInCart, deleteFromCart } = productsSlice.actions;

export default productsSlice.reducer;

