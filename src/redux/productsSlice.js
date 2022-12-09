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
  }
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    setFilter: (state,action) => {
      state.filter = action.payload
    },
  }
});

export const { setFilter } = productsSlice.actions;

export default productsSlice.reducer;

