import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState={
  products: [],
  loading: false,
  error: false,
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

export const getProducts = createAsyncThunk('products/getProducts', async() => {
  return fetch('https://react-lego-store-default-rtdb.firebaseio.com/products.json').then((res) =>
    res.json())
});

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
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.err = false
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }

    
});

export const { addInCart, deleteFromCart } = productsSlice.actions;

export default productsSlice.reducer;

