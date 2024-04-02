import React from 'react';
import IconFav from '../UI/IconFav/IconFav';
import { ReactComponent as IconFavFill } from '../../icons/iconHeartFill.svg';
import ButtonStroke from '../UI/Button/ButtonStroke';
import RoundColor from '../UI/RoundColor/RoundColor';
import newIcon from '../../icons/iconNew.svg';
import { Link, useParams } from 'react-router-dom';

const ProductsCard = ({ prod, handleModal, handleFavorite, vendor }) => {
  const audience = useParams().audience,
    category = useParams()['prod_category'];

  return (
    <>
      <li className="product-card">
        <span className="favorite-icon-wrap" onClick={() => handleFavorite(vendor)}>
          {prod.isFavorite ? (
            <IconFavFill className="product-card__favorite-icon_fill favorite-icon_fill" />
          ) : (
            <IconFav className="product-card__favorite-icon favorite-icon" />
          )}
        </span>

        <Link
          to={
            audience && !category
              ? `${prod.category}/${vendor}`
              : audience && category
                ? `${vendor}`
                : `${prod.audience}/${prod.category}/${vendor}`
          }
        >
          <div className="product-card__img-wrap">
            <img src={`/img/products/${prod.preview}`} alt="product img" />
          </div>
        </Link>

        {prod.actual === 'new' && (
          <img className="product-card__new-icon new-icon" src={newIcon} alt="icon new" />
        )}

        <Link
          className="product-card__link"
          to={
            audience && !category
              ? `${prod.category}/${vendor}`
              : audience && category
                ? `${vendor}`
                : `${prod.audience}/${prod.category}/${vendor}`
          }
        >
          <h2 className="product-card__title">{prod.title}</h2>
        </Link>
        <ul className="product-card__colors-list colors-list">
          {prod.colors.map((color, index) => (
            <RoundColor
              key={index}
              className={'product-card__color-icon'}
              style={{ backgroundColor: color }}
              color={color}
            />
          ))}
        </ul>
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
