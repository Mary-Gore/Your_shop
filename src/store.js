import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import filterReducer from './features/filter/filterSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
  },
});

export default store;
