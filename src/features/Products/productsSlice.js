import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  isLoading: false,
};

export const fetchProds = createAsyncThunk('products/fetchProds', async (url, thunkAPI) => {
  try {
    const res = await fetch(url);
    let data = await res.json();
    data = data.map(item => ({ ...item, isFavorite: false }));
    return data;
  } catch (error) {
    console.log(error);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      state.products.forEach(prod => {
        if (prod.vendor === action.payload) prod.isFavorite = !prod.isFavorite;
      });
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
export const { toggleFavorite } = productsSlice.actions;

// Selectors
export const selectProducts = state => state.products.products;
export const selectIsLoading = state => state.products.isLoading;
