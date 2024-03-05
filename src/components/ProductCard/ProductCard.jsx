import React from 'react';
import IconFav from '../UI/IconFav/IconFav';
import { ReactComponent as IconFavFill } from '../../icons/iconHeartFill.svg';
import ButtonStroke from '../UI/Button/ButtonStroke';
import RoundColor from '../UI/RoundColor/RoundColor';
import newIcon from '../../icons/iconNew.svg';

const ProductsCard = ({ prod, handleToggleFavorite, handleModal }) => {
  return (
    <>
      <li className="product-card">
        <span className="favorite-icon-wrap" onClick={() => handleToggleFavorite()}>
          {prod.isFavorite ? (
            <IconFavFill className="product-card__favorite-icon_fill favorite-icon_fill" />
          ) : (
            <IconFav className="product-card__favorite-icon favorite-icon" />
          )}
        </span>

        <div className="product-card__img-wrap">
          <img src={`/img/products/${prod.preview}`} alt="product img" />
        </div>

        {prod.actual === 'new' && (
          <img className="product-card__new-icon new-icon" src={newIcon} alt="icon new" />
        )}

        <h2 className="product-card__title">{prod.title}</h2>
        <span className="product-card__colors-wrapper">
          {prod.colors.map((color, index) => (
            <RoundColor
              key={index}
              className={'product-card__color-icon'}
              style={{ backgroundColor: color }}
              color={color}
            />
          ))}
        </span>
        <div className="product-card__price-wrap">
          {prod.oldPrice && <p className="product-card__old-price">{`${prod.oldPrice} ₽`}</p>}
          <p className="product-card__price">{`${prod.price} ₽`}</p>
        </div>
        <ButtonStroke className="product-card__btn-stroke" onClick={handleModal} prod={prod}>
          В корзину
        </ButtonStroke>
      </li>
    </>
  );
};

export default ProductsCard;
