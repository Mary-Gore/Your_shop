import { createSlice } from '@reduxjs/toolkit';

const searchProductSlice = createSlice({
  name: 'searchProduct',
  initialState: {
    searchTitle: '',
  },
  reducers: {
    setSearchProduct: (state, action) => {
      state.searchTitle = action.payload;
    },
    clearSearchProduct: state => {
      state.searchTitle = '';
    },
  },
});

// Reducer
export default searchProductSlice.reducer;

//Actions
export const { setSearchProduct, clearSearchProduct } = searchProductSlice.actions;

//Selectors
export const selectSearchTitle = state => state.searchProduct.searchTitle;
