import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './components/Products/ProductsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export default store;
