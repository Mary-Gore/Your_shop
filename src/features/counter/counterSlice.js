import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productItem: {},
  quantity: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrementCounter: (state, action) => {
      if (state.quantity > 1)
        state.productItem = { ...action.payload, quantity: (state.quantity -= 1) };
    },
    incrementCounter: (state, action) => {
      state.productItem = { ...action.payload, quantity: (state.quantity += 1) };
    },
    resetCounter: state => {
      state.quantity = 1;
    },
  },
});

// Reducer
export default counterSlice.reducer;

// Actions
export const { decrementCounter, incrementCounter, resetCounter } = counterSlice.actions;

// Selectors
export const selectCounterQuantity = state => state.counter.quantity;
