import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { FaCircle } from 'react-icons/fa';
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
  selectColors,
  selectFilteredColors,
} from '../../features/filter/filterSlice';

const Catalog = () => {
  const categories = useParams(),
    audience = categories.audience,
    location = useLocation(),
    brands = useSelector(selectBrands),
    colors = useSelector(selectColors),
    filteredBrands = useSelector(selectFilteredBrands),
    filteredColors = useSelector(selectFilteredColors),
    [isPopupFilterOpen, setPopupFilterOpen] = useState(false),
    [isPopupSortOpen, setPopupSortOpen] = useState(false),
    dispatch = useDispatch();

  /* Добавление и удаление значения checkbox из store - filteredBrands */
  const handleCheckbox = checkbox => {
    if (filteredBrands.includes(checkbox.value)) {
      dispatch(removeFilteredBrands(checkbox.value));
    } else {
      dispatch(setFilteredBrands(checkbox.value));
    }
  };

  const getCheckedBrands = inputBrand => {
    return filteredBrands.some(brand => brand === inputBrand);
  };

  const getCheckedColors = inputColor => {
    return filteredColors.some(color => color === inputColor);
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

  const handleColorName = colorName => {
    switch (colorName) {
      case 'lightblue':
        return 'Голубой';
      case 'blue':
        return 'Синий';
      case 'black':
        return 'Чёрный';
      case 'pink':
        return 'Розовый';
      case 'beige':
        return 'Бежевый';
      case 'white':
        return 'Белый';
      case 'brown':
        return 'Коричневый';
      case 'green':
        return 'Зелёный';
      case 'red':
        return 'Красный';
      case 'grey':
        return 'Серый';
      case 'gold':
        return 'Золотой';
      default:
        break;
    }
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
                    checked={getCheckedBrands(brand)}
                    id={`check-${index + 1}`}
                    className="custom-checkbox"
                  />
                  <label htmlFor={`check-${index + 1}`}>{brand}</label>
                </li>
              ))}
            </ul>
          )}
          <h3 className="filter-title">Цвета</h3>
          <ul>
            {colors.map((color, index) => (
              <li className="filter-item" key={index}>
                <input
                  type="checkbox"
                  onChange={e => handleCheckbox(e.target)}
                  checked={getCheckedColors(color)}
                  id={`check-${index + 1}`}
                  className="filter-colors__custom-checkbox custom-checkbox"
                />
                <label htmlFor={`check-${index + 1}`}>{handleColorName(color)}</label>
                <FaCircle
                  key={index}
                  style={{ color: color }}
                  className={
                    color === 'white'
                      ? 'filter__color-icon color-icon_white'
                      : 'filter__color-icon color-icon'
                  }
                />
              </li>
            ))}
          </ul>
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