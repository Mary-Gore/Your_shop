import { createSlice } from '@reduxjs/toolkit';

const searchProductSlice = createSlice({
  name: 'searchProduct',
  initialState: '',
  reducers: {
    setSearchProduct: (state, action) => {
      return action.payload;
    },
    clearSearchProduct: state => {
      return '';
    },
  },
});

// Reducer
export default searchProductSlice.reducer;

//Actions
export const { setSearchProduct, clearSearchProduct } = searchProductSlice.actions;

//Selectors
export const selectSearchProduct = state => state.searchProduct;
