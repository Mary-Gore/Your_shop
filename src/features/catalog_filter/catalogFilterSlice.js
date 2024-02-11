import { createSlice } from '@reduxjs/toolkit';

/*const initialState = {
  category: '',
  prodCategory: '',
}; */

const initialState = {
  filtredProds: [],
};

const filterSlice = createSlice({
  name: 'catalogFilter',
  initialState,
  reducers: {
    filteredProds: (state, action) => {
      try {
      } catch (error) {
        return error;
      }
    },
    /*   setCategory: (state, action) => {
      state.category = action.payload;
    },
    setProdCategory: (state, action) => {
      state.prodCategory = action.payload;
    },
    resetCategory: state => {
      state.category = initialState.category;
    },
    resetProdCategory: state => {
      state.prodCategory = initialState.prodCategory;
    }, */
  },
});

// Reducer
export default filterSlice.reducer;

//Actions
export const { setCategory, setProdCategory, resetProdCategory, resetCategory } =
  filterSlice.actions;

// Selectors
export const selectCategory = state => state.filter.category;
export const selectProdCategory = state => state.filter.prodCategory;
