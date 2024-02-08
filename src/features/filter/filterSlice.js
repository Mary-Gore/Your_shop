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
    resetProdCategory: state => {
      state.prodCategory = initialState.prodCategory;
    },
  },
});

// Reducer
export default filterSlice.reducer;

//Actions
export const { setCategory, setProdCategory, resetProdCategory } = filterSlice.actions;

// Selectors
export const selectCategory = state => state.filter.category;
export const selectProdCategory = state => state.filter.prodCategory;
