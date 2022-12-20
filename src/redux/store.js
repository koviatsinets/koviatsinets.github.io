import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './productsSlice';
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        market: productsReducer,
        user: userReducer
    },
})
