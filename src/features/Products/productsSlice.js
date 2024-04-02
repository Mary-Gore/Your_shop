import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

const initialState = {
  products: [],
  favoriteProducts: JSON.parse(localStorage.getItem('favoriteProducts'))
    ? JSON.parse(localStorage.getItem('favoriteProducts'))
    : [],
  isLoading: false,
};

export const fetchProds = createAsyncThunk('products/fetchProds', async (url, thunkAPI) => {
  try {
    const res = await fetch(url);
    let data = await res.json();
    data = data.map(item => ({ ...item, isFavorite: false, id: id }));
    return data;
  } catch (error) {
    console.log(error);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToFavoriteProds: (state, action) => {
      const favoriteProduct = state.products.filter(prod => prod.vendor === action.payload);
      state.favoriteProducts.push(favoriteProduct);
      localStorage.setItem('favoriteProducts', JSON.stringify({ ...favoriteProduct }));
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProds.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchProds.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchProds.rejected, state => {
      state.isLoading = false;
    });
  },
});

// Reducer
export default productsSlice.reducer;

//Actions
export const { addToFavoriteProds } = productsSlice.actions;

// Selectors
export const selectProducts = state => state.products.products;
export const selectIsLoading = state => state.products.isLoading;
export const selectFavoriteProducts = state => state.products.favoriteProducts;
