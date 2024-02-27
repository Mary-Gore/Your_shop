import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// React icons
import { BiLoaderAlt } from 'react-icons/bi';
import { FaCircle } from 'react-icons/fa';
// Selectors
import { selectProducts, selectIsLoading, fetchProds, toggleFavorite } from './productsSlice';
import { addToCart } from '../cart/cartSlice';
import {
  addBrand,
  addColor,
  removeAllBrands,
  selectFilteredBrandsBase,
  selectIsFiltered,
  selectFilteredColorsBase,
  removeAllColors,
} from '../filter/filterSlice';
// Components
import ButtonStroke from '../../components/UI/Button/ButtonStroke';
import Popup from '../../components/UI/Popup/Popup';
import Modal from '../../components/UI/Modal/Modal';
// My icons
import newIcon from '../../icons/iconNew.svg';
import IconFav from '../../components/UI/IconFav/IconFav';
import { ReactComponent as IconFavFill } from '../../icons/iconHeartFill.svg';
import { useParams } from 'react-router-dom';

const Products = () => {
  const products = useSelector(selectProducts),
    isLoading = useSelector(selectIsLoading),
    isFiltered = useSelector(selectIsFiltered),
    dispatch = useDispatch(),
    categories = useParams(),
    audience = categories.audience,
    prodCategory = categories['prod_category'],
    tempBrands = [],
    tempColors = [],
    filteredBrandsBase = useSelector(selectFilteredBrandsBase),
    filteredColorsBase = useSelector(selectFilteredColorsBase),
    [isModalParamsOpen, setModalParamsOpen] = useState(false),
    [prodModal, setProdModal] = useState({}),
    [sizeModal, setSizeModal] = useState(''),
    [colorModal, setColorModal] = useState(''),
    [isActiveSize, setActiveSize] = useState(false);

  useEffect(() => {
    dispatch(
      fetchProds(
        'https://your-shop-7be97-default-rtdb.europe-west1.firebasedatabase.app/products.json',
      ),
    );
  }, []);

  useEffect(() => {
    products.forEach(product => {
      if (
        (product.audience === audience || !audience) &&
        (product.category === prodCategory || !prodCategory)
      ) {
        tempBrands.push(product.brand);
        product.colors.forEach(color => tempColors.push(color));
      }
    });

    /* Составление массива уник. названий брендов */
    if (tempBrands.length !== 0) {
      const uniqueBrands = tempBrands.reduce((acc, brand) => {
        if (acc.includes(brand)) {
          return acc;
        } else {
          return [...acc, brand];
        }
      }, []);

      dispatch(removeAllBrands());
      dispatch(addBrand(uniqueBrands));
    }

    if (tempColors.length !== 0) {
      const uniqueColors = tempColors.reduce((acc, color) => {
        if (acc.includes(color)) {
          return acc;
        } else {
          return [...acc, color];
        }
      }, []);

      dispatch(removeAllColors());
      dispatch(addColor(uniqueColors));
    }
  }, [products, audience, prodCategory]);

  const handleToggleFavorite = vendor => {
    dispatch(toggleFavorite(vendor));
  };

  const filteredProds = products.filter(product => {
    let audienceFilter = product.audience === audience,
      prodCatFilter = product.category === prodCategory,
      brandFilter = false,
      colorFilter = false;

    if (isFiltered) {
      if (filteredBrandsBase.length !== 0) {
        filteredBrandsBase.forEach(brand => {
          if (product.brand === brand) brandFilter = true;
        });
      } else {
        brandFilter = true;
      }

      if (filteredColorsBase.length !== 0) {
        filteredColorsBase.forEach(color => {
          product.colors.forEach(prodColor => {
            if (prodColor === color) {
              colorFilter = true;
            }
          });
        });
      } else {
        colorFilter = true;
      }
    }

    /* Если параметры отсутствуют */
    if (!prodCategory) prodCatFilter = true;
    if (!audience) audienceFilter = true;
    if (!isFiltered) {
      brandFilter = true;
      colorFilter = true;
    }

    return audienceFilter && prodCatFilter && brandFilter && colorFilter;
  });

  const addToCartHandler = (product, color, size) => {
    dispatch(addToCart({ ...product, color, size }));
    setModalParamsOpen(false);
  };

  const handleModal = prod => {
    setProdModal(prod);
    setModalParamsOpen(true);
  };

  return (
    <div className="products">
      {/*Оставить для SEO скрытым через стили <h1>Products</h1> */}
      {isLoading && <BiLoaderAlt className="preloader" />}
      {isFiltered && filteredProds.length === 0 && (
        <div className="not-found-filters">Совпадений не найдено</div>
      )}
      {filteredProds.length > 0 && (
        <ul className="products__list">
          {filteredProds.map(prod => (
            <li className="products__item" key={prod.vendor}>
              <span
                className="favorite-icon-wrap"
                onClick={() => handleToggleFavorite(prod.vendor)}
              >
                {prod.isFavorite ? (
                  <IconFavFill className="products__favorite-icon_fill favorite-icon_fill" />
                ) : (
                  <IconFav className="products__favorite-icon favorite-icon" />
                )}
              </span>

              <div className="products__img-wrap">
                <img src={`/img/products/${prod.preview}`} alt="product img" />
              </div>

              {prod.actual === 'new' && (
                <img className="products__new-icon new-icon" src={newIcon} alt="icon new" />
              )}

              <h2 className="products__item-title">{prod.title}</h2>
              <span className="products__colors-wrapper">
                {prod.colors.map((color, index) => (
                  <FaCircle
                    key={index}
                    style={{ color: color }}
                    className={
                      color === 'white'
                        ? 'products__color-icon color-icon_white'
                        : 'products__color-icon color-icon'
                    }
                  />
                ))}
              </span>
              <div className="products__price-wrap">
                {prod.oldPrice && <p className="products__old-price">{`${prod.oldPrice} ₽`}</p>}
                <p className="products__item-price">{`${prod.price} ₽`}</p>
              </div>
              <ButtonStroke className="products__btn-stroke" onClick={() => handleModal(prod)}>
                В корзину
              </ButtonStroke>
            </li>
          ))}
        </ul>
      )}
      <Modal isOpen={isModalParamsOpen} onClose={() => setModalParamsOpen(false)}>
        <div className="modal-sizes">
          <div className="modal-sizes-wrap">
            <h3 className="modal-params-title">Выберите размер:</h3>
            <ul className="modal-sizes-list">
              {Object.keys(prodModal).length !== 0 &&
                prodModal.sizes.map((size, index) => (
                  <li key={index} className="modal-sizes-list__item">
                    <span
                      className={
                        sizeModal === size
                          ? 'params__size-block params__size-block_active size-block'
                          : 'params__size-block size-block'
                      }
                      onClick={() => setSizeModal(size)}
                    >
                      {size}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="modal-colors-wrap">
          <h3 className="modal-params-title">Выберите цвет:</h3>
          <ul className="modal-colors-list">
            {Object.keys(prodModal).length !== 0 &&
              prodModal.colors.map((color, index) => (
                <li key={index} className="modal-colors-list__item">
                  <span
                    style={{ backgroundColor: color }}
                    className={
                      colorModal === color
                        ? 'params__color-block color-block color-block_active'
                        : 'params__color-block color-block'
                    }
                    onClick={() => setColorModal(color)}
                  ></span>
                </li>
              ))}
          </ul>
        </div>
        <button
          className="modal-sucess-btn"
          onClick={() => addToCartHandler(prodModal, colorModal, sizeModal)}
        >
          Готово
        </button>
      </Modal>
    </div>
  );
};

export default Products;
