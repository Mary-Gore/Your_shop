import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalQuantitty: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.vendor === action.payload.vendor);
      /* Если совпадение найдено */
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    removeFromCart: (state, action) => {
      return state.cartItems.filter(itemCart => itemCart !== action.payload);
    },
  },
});

// Reducer
export default cartSlice.reducer;

// Actions
export const { addToCart } = cartSlice.actions;

// Selectors
export const selectCartItems = state => state.cartItems;
