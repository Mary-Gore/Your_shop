import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// React icons
import { BiLoaderAlt } from 'react-icons/bi';
// Selectors
import { selectProducts, selectIsLoading, fetchProds, toggleFavoriteProds } from './productsSlice';
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
import Modal from '../../components/UI/Modal/Modal';
// My icons
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';

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
    [colorModal, setColorModal] = useState('');

  useEffect(() => {
    const storageProds = JSON.parse(localStorage.getItem('productsIsFavorite'));
    if (!storageProds) {
      dispatch(
        fetchProds(
          'https://your-shop-7be97-default-rtdb.europe-west1.firebasedatabase.app/products.json',
        ),
      );
    }
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

    // Составление массива уник. названий брендов
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

    // Если параметры отсутствуют
    if (!prodCategory) prodCatFilter = true;
    if (!audience) audienceFilter = true;
    if (!isFiltered) {
      brandFilter = true;
      colorFilter = true;
    }

    return audienceFilter && prodCatFilter && brandFilter && colorFilter;
  });

  const addToCartHandler = (product, color, size) => {
    if (color && size) {
      dispatch(addToCart({ ...product, color, size }));
      setModalParamsOpen(false);
      setColorModal('');
      setSizeModal('');
    }
  };

  const handleModal = prod => {
    setProdModal(prod);
    setModalParamsOpen(true);
  };

  const handleFavorite = vendor => {
    dispatch(toggleFavoriteProds(vendor));
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
          {filteredProds.map(product => (
            <ProductCard
              key={product.vendor}
              vendor={product.vendor}
              prod={product}
              handleFavorite={handleFavorite}
              handleModal={handleModal}
            />
          ))}
        </ul>
      )}

      <Modal
        isOpen={isModalParamsOpen}
        onClose={() => setModalParamsOpen(false)}
        resetColor={() => setColorModal('')}
        resetSize={() => setSizeModal('')}
      >
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
          onClick={() => {
            addToCartHandler(prodModal, colorModal, sizeModal);
          }}
        >
          Готово
        </button>
      </Modal>
    </div>
  );
};

export default Products;
