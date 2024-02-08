import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: '',
  prodCategory: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setProdCategory: (state, action) => {
      state.prodCategory = action.payload;
    },
  },
});

// Reducer
export default filterSlice.reducer;

//Actions
export const { setCategory, setProdCategory } = filterSlice.actions;

// Selectors
export const selectCategory = state => state.filter.category;
export const selectProdCategory = state => state.filter.prodCategory;
