import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import filterReducer from './features/filter/filterSlice';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export default store;
