import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/Products/productsSlice';
import filterReducer from './features/filter/filterSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
  },
});

export default store;
