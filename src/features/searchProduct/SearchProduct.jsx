import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchProduct } from './searchProductSlice';

const SearchProduct = () => {
  const dispatch = useDispatch(),
    [search, setSearch] = useState('');

  const onSearchHandler = e => {
    setSearch(e.target.value);
  };

  const onSearchSubmitHandler = e => {
    e.preventDefault();
    dispatch(setSearchProduct(search));
  };

  return (
    <div className="search-form-wrap">
      <form role="search" id="search-form" className="search-form" onSubmit={onSearchSubmitHandler}>
        <button className="search-form__btn" type="submit"></button>
        <input
          className="search-form__input"
          value={search}
          onChange={onSearchHandler}
          type="search"
          placeholder="Найти..."
        />
      </form>
    </div>
  );
};

export default SearchProduct;
