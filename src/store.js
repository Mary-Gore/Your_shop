import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import filterReducer from './features/filter/filterSlice';
import cartReducer from './features/cart/cartSlice';
import counterReducer from './features/counter/counterSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    cart: cartReducer,
    counter: counterReducer,
  },
});

export default store;
