import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brands: [],
  filteredBrands: [],
  filteredBrandsBase: [],
  colors: [],
  filteredColors: [],
  filteredColorsbase: [],
  isFiltered: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addBrand: (state, action) => {
      state.brands = action.payload;
    },
    setFilteredBrands: (state, action) => {
      state.filteredBrands.push(action.payload);
    },
    removeFilteredBrands: (state, action) => {
      const filteredBrands = state.filteredBrands.filter(brand => brand !== action.payload);
      return { ...state, filteredBrands };
    },
    copyFilteredBrands: state => {
      const filteredBrandsBase = [...state.filteredBrands];
      return { ...state, filteredBrandsBase };
    },
    copyFilteredBrandsBase: state => {
      const filteredBrands = [...state.filteredBrandsBase];
      return { ...state, filteredBrands };
    },
    removeAllBrands: state => {
      const filteredBrands = [],
        filteredBrandsBase = [];
      return { ...state, filteredBrands, filteredBrandsBase, isFiltered: false };
    },
    setFilters: (state, action) => {
      state.isFiltered = action.payload;
    },
    addColor: (state, action) => {
      state.colors = action.payload;
    },
    setFilteredColors: (state, action) => {
      state.filteredColors.push(action.payload);
    },
    removeFilteredColors: (state, action) => {
      const filteredColors = state.filteredColors.filter(color => color !== action.payload);
      return { ...state, filteredColors };
    },
    copyFilteredColors: state => {
      const filteredColorsBase = [...state.filteredColors];
      return { ...state, filteredColorsBase };
    },
    copyFilteredColorsBase: state => {
      const filteredColors = [...state.filteredColorsBase];
      return { ...state, filteredColors };
    },
    removeAllColors: state => {
      const filteredColors = [],
        filteredColorsBase = [];
      return { ...state, filteredColors, filteredColorsBase, isFiltered: false };
    },
  },
});

// Reducer
export default filterSlice.reducer;

//Actions
export const {
  addBrand,
  removeFilteredBrands,
  setFilteredBrands,
  removeAllBrands,
  setFilters,
  copyFilteredBrands,
  copyFilteredBrandsBase,
  addColor,
} = filterSlice.actions;

// Selectors
export const selectBrands = state => state.filter.brands;
export const selectFilteredBrands = state => state.filter.filteredBrands;
export const selectFilteredBrandsBase = state => state.filter.filteredBrandsBase;
export const selectColors = state => state.filter.colors;
export const selectFilteredColors = state => state.filter.filteredColors;
export const selectFilteredColorsBase = state => state.filter.filteredColorsBase;
export const selectIsFiltered = state => state.filter.isFiltered;
