import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchProduct, setSearchProduct } from './searchProductSlice';

const SearchProduct = () => {
  const searchProduct = useSelector(selectSearchProduct),
    dispatch = useDispatch();

  const onSearchHandler = e => {
    dispatch(setSearchProduct(e.target.value));
  };
  return (
    <div className="search-form-wrap">
      <form id="search-form" className="search-form">
        <button className="search-form__btn" type="submit"></button>
        <input
          className="search-form__input"
          value={searchProduct}
          onChange={onSearchHandler}
          type="search"
          placeholder="Найти..."
        />
      </form>
    </div>
  );
};

export default SearchProduct;
