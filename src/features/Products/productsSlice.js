import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

const initialState = {
  products: JSON.parse(localStorage.getItem('productsIsFavorite'))
    ? JSON.parse(localStorage.getItem('productsIsFavorite'))
    : [],
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
    toggleFavoriteProds: (state, action) => {
      state.products.forEach(prod => {
        if (prod.vendor === action.payload) {
          prod.isFavorite = !prod.isFavorite;
          localStorage.setItem('productsIsFavorite', JSON.stringify([...state.products]));
        }
      });

      const indexProd = state.products.findIndex(prod => prod.vendor === action.payload),
        favoriteProduct = state.products[indexProd];

      const indexFav = state.favoriteProducts.findIndex(
        favProd => favProd.vendor === action.payload,
      );

      if (indexFav >= 0) {
        const removed = state.favoriteProducts.filter(favProd => favProd.vendor !== action.payload);
        state.favoriteProducts = removed;
      } else {
        state.favoriteProducts.push(favoriteProduct);
      }

      localStorage.setItem('favoriteProducts', JSON.stringify([...state.favoriteProducts]));
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
export const { toggleFavoriteProds } = productsSlice.actions;

// Selectors
export const selectProducts = state => state.products.products;
export const selectIsLoading = state => state.products.isLoading;
export const selectFavoriteProducts = state => state.products.favoriteProducts;
