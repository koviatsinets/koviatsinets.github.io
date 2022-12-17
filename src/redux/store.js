import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productsSlice';

export const store = configureStore({
    reducer: {
        market: productsReducer,
    },
})