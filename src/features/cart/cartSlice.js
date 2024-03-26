import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems'))
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        cartItem =>
          cartItem.vendor === action.payload.vendor &&
          cartItem.color === action.payload.color &&
          cartItem.size === action.payload.size,
      );
      /* Если совпадение найдено */
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        if (!action.payload.prodQuantity) {
          state.cartItems.push({ ...action.payload, cartQuantity: 1 });
        } else {
          state.cartItems.push({ ...action.payload, cartQuantity: action.payload.prodQuantity });
        }
      }

      state.cartItems.forEach((cartItem, index) => {
        cartItem.cartId = index;
      });

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const removedItems = state.cartItems.filter(
        cartItem => cartItem.cartId !== action.payload.cartId,
      );

      localStorage.setItem('cartItems', JSON.stringify({ ...state, cartItems: removedItems }));
      return { ...state, cartItems: removedItems };
    },
    plusQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.cartId === action.payload.cartId);
      state.cartItems[itemIndex].cartQuantity += 1;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    minusQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.cartId === action.payload.cartId);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const removedItems = state.cartItems.filter(
          cartItem => cartItem.cartId !== action.payload.cartId,
        );
        localStorage.setItem('cartItems', JSON.stringify({ ...state, cartItems: removedItems }));
        return { ...state, cartItems: removedItems };
      }
    },
    getTotals: state => {
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
