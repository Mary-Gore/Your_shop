import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiLoaderAlt } from 'react-icons/bi';
import { FaCircle } from 'react-icons/fa';
import {
  selectProducts,
  selectIsLoading,
  fetchProds,
  toggleFavorite,
} from '../Products/ProductsSlice';
import ButtonStroke from '../UI/Button/ButtonStroke';
import newIcon from '../../icons/iconNew.svg';
import IconFav from '../UI/IconFav/IconFav';
import { ReactComponent as IconFavFill } from '../../icons/iconHeartFill.svg';

const Products = () => {
  let products = useSelector(selectProducts);

  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchProds(
        'https://your-shop-7be97-default-rtdb.europe-west1.firebasedatabase.app/products.json',
      ),
    );
  }, []);

  const handleToggleFavorite = vendor => {
    dispatch(toggleFavorite(vendor));
  };

  return (
    <div className="products">
      <h1> {/*Скрыть для SEO */} Products</h1>
      {isLoading && <BiLoaderAlt className="preloader" />}
      <ul className="products__list">
        {products.map(prod => (
          <li className="products__item" key={prod.vendor}>
            <span className="favorite-icon-wrap" onClick={() => handleToggleFavorite(prod.vendor)}>
              {prod.isFavorite ? (
                <IconFavFill className="products__favorite-icon_fill favorite-icon_fill" />
              ) : (
                <IconFav className="products__favorite-icon favorite-icon" />
              )}
            </span>

            <div className="products__img-wrap">
              <img src={`./img/products/${prod.preview}`} alt="product img" />
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
