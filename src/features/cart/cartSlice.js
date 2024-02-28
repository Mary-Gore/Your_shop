import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
  cartItems: [],
  totalQuantity: 0,
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
      const removedItems = state.cartItems.filter(
        cartItem => cartItem.vendor !== action.payload.vendor,
      );
      return { ...state, cartItems: removedItems };
    },
    plusQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.vendor === action.payload.vendor);
      state.cartItems[itemIndex].cartQuantity += 1;
    },
    minusQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.vendor === action.payload.vendor);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const removedItems = state.cartItems.filter(
          cartItem => cartItem.vendor !== action.payload.vendor,
        );
        return { ...state, cartItems: removedItems };
      }
    },
    sumTotalQuantity: state => {
      state.cartItems.forEach(cartItem => {
        state.totalQuantity += cartItem.cartQuantity;
      });
    },
    minusTotalQuantity: state => {
      state.cartItems.forEach(cartItem => {
        state.totalQuantity -= cartItem.cartQuantity;
      });
    },
    getTotals: (state, action) => {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem,
            priceItemTotal = price * cartQuantity;

          cartTotal.total += priceItemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        /* initial values */
        {
          total: 0,
          quantity: 0,
        },
      );
      state.totalPrice = total;
      state.totalQuantity = quantity;
    },
  },
});

// Reducer
export default cartSlice.reducer;

// Actions
export const {
  addToCart,
  plusQuantity,
  minusQuantity,
  sumTotalQuantity,
  minusTotalQuantity,
  removeFromCart,
  getTotals,
} = cartSlice.actions;

// Selectors
export const selectCartItems = state => state.cart.cartItems;
export const selectTotalQuantity = state => state.cart.totalQuantity;
export const selectTotalPrice = state => state.cart.totalPrice;
