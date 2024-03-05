import React from 'react';
import IconFav from '../../components/UI/IconFav/IconFav';
import { ReactComponent as IconFavFill } from '../../icons/iconHeartFill.svg';
import ButtonStroke from '../UI/Button/ButtonStroke';
import RoundColor from '../UI/RoundColor/RoundColor';
import newIcon from '../../icons/iconNew.svg';

const ProductsCard = ({ prod, handleToggleFavorite, handleModal }) => {
  return (
    <>
      <li className="products-card">
        <span className="favorite-icon-wrap" onClick={() => handleToggleFavorite()}>
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

        <h2 className="products-card__title">{prod.title}</h2>
        <span className="products__colors-wrapper">
          {prod.colors.map((color, index) => (
            <RoundColor
              key={index}
              className={'products__color-icon'}
              style={{ backgroundColor: color }}
              color={color}
            />
          ))}
        </span>
        <div className="products__price-wrap">
          {prod.oldPrice && <p className="products__old-price">{`${prod.oldPrice} ₽`}</p>}
          <p className="products-card__price">{`${prod.price} ₽`}</p>
        </div>
        <ButtonStroke className="products__btn-stroke" onClick={handleModal} prod={prod}>
          В корзину
        </ButtonStroke>
      </li>
    </>
  );
};

export default ProductsCard;
