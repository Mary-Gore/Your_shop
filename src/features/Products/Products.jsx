import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// React icons
import { BiLoaderAlt } from 'react-icons/bi';
import { FaCircle } from 'react-icons/fa';
// Selectors
import { selectProducts, selectIsLoading, fetchProds, toggleFavorite } from './productsSlice';
import {
  addBrand,
  removeAllBrands,
  selectFilteredBrandsBase,
  selectIsFiltered,
} from '../filter/filterSlice';
// Components
import ButtonStroke from '../../components/UI/Button/ButtonStroke';
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
    filteredBrandsBase = useSelector(selectFilteredBrandsBase);

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
      }
    });

    /* Составление массива уник. названий брендов */
    if (tempBrands.length !== 0) {
      const filterBrands = tempBrands.reduce((acc, brand) => {
        if (acc.includes(brand)) {
          return acc;
        } else {
          return [...acc, brand];
        }
      }, []);

      dispatch(removeAllBrands());
      dispatch(addBrand(filterBrands));
    }
  }, [products, audience, prodCategory]);

  const handleToggleFavorite = vendor => {
    dispatch(toggleFavorite(vendor));
  };

  const filteredProds = products.filter(product => {
    let audienceFilter = product.audience === audience,
      prodCatFilter = product.category === prodCategory,
      brandFilter = false;

    if (isFiltered) {
      filteredBrandsBase.forEach(brand => {
        if (product.brand === brand) brandFilter = true;
      });
    }

    /* Если параметры отсутствуют */
    if (!prodCategory) prodCatFilter = true;
    if (!audience) audienceFilter = true;
    if (!isFiltered) brandFilter = true;

    return audienceFilter && prodCatFilter && brandFilter;
  });

  return (
    <div className="products">
      {/*Оставить для SEO скрытым через стили <h1>Products</h1> */}
      {isLoading && <BiLoaderAlt className="preloader" />}
      <ul className="products__list">
        {filteredProds.map(prod => (
          <li className="products__item" key={prod.vendor}>
            <span className="favorite-icon-wrap" onClick={() => handleToggleFavorite(prod.vendor)}>
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
            <ButtonStroke className="products__btn-stroke">В корзину</ButtonStroke>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
