import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productItem: {},
  quantity: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrementCounter: (state, action) => {
      state.productItem = { ...action.payload, quantity: (state.quantity -= 1) };
    },
    incrementCounter: (state, action) => {
      state.productItem = { ...action.payload, quantity: (state.quantity += 1) };
    },
  },
});

// Reducer
export default counterSlice.reducer;

// Actions
export const { decrementCounter, incrementCounter } = counterSlice.actions;

// Selectors
export const selectCounterQuantity = state => state.counter.quantity;
