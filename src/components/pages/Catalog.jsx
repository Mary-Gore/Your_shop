import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import Products from '../../features/products/Products';
import ExtraMenu from '../ExtraMenu/ExtraMenu';
import FIlterBtn from '../UI/FilterBtn/FilterBtn';
import SortBtn from '../UI/SortBtn/SortBtn';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import Popup from '../UI/Popup/Popup';
import {
  selectBrands,
  selectFilteredBrands,
  removeFilteredBrands,
  setFilteredBrands,
  setFilters,
  copyFilteredBrands,
  copyFilteredBrandsBase,
} from '../../features/filter/filterSlice';

const Catalog = () => {
  const categories = useParams(),
    audience = categories.audience,
    location = useLocation(),
    brands = useSelector(selectBrands),
    [isPopupFilterOpen, setPopupFilterOpen] = useState(false),
    [isPopupSortOpen, setPopupSortOpen] = useState(false),
    filteredBrands = useSelector(selectFilteredBrands),
    dispatch = useDispatch();

  /* Добавление и удаление значения checkbox из store - filteredBrands */
  const handleCheckbox = checkbox => {
    if (filteredBrands.includes(checkbox.value)) {
      dispatch(removeFilteredBrands(checkbox.value));
    } else {
      dispatch(setFilteredBrands(checkbox.value));
    }
  };

  const getChecked = inputBrand => {
    return filteredBrands.some(brand => inputBrand === brand);
  };

  const handleFilters = () => {
    dispatch(setFilters(true));
    setPopupFilterOpen(false);
    dispatch(copyFilteredBrands());
  };

  const onFilterBtnHandler = () => {
    setPopupFilterOpen(!isPopupFilterOpen);
    dispatch(copyFilteredBrandsBase());
  };

  return (
    <>
      {audience && <ExtraMenu />}
      <div className="content-bar-wrap">
        <FIlterBtn className="filter-btn" onClick={() => onFilterBtnHandler()} />
        <Popup className="filter" isOpen={isPopupFilterOpen}>
          <h3 className="filter-title">Бренды</h3>
          {brands && (
            <ul>
              {brands.map((brand, index) => (
                <li className="filter-item" key={index}>
                  <input
                    type="checkbox"
                    onChange={e => handleCheckbox(e.target)}
                    value={brand}
                    checked={getChecked(brand)}
                    id={`check-${index + 1}`}
                    className="custom-checkbox"
                  />
                  <label htmlFor={`check-${index + 1}`}>{brand}</label>
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => handleFilters()}>Применить</button>
        </Popup>
        <Popup className="sort" isOpen={isPopupSortOpen}>
          <h2>Sort filter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At odio nulla minima, vel
            cupiditate consequatur dolor repellendus molestias aut, id totam nostrum velit, eveniet
            sit architecto dicta quas nobis ipsam!
          </p>
        </Popup>
        {location.pathname !== '/' && <Breadcrumbs />}
        <SortBtn onClick={() => setPopupSortOpen(!isPopupSortOpen)} />
      </div>
      <Products />
    </>
  );
};

export default Catalog;
