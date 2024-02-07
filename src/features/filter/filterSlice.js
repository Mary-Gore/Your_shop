import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

// Reducer
export default filterSlice.reducer;

//Actions
export const { setCategory } = filterSlice.actions;

// Selectors
export const selectCategory = state => state.filter.category;
