import { useSelector } from 'react-redux';
import React from 'react';
import { selectCartItems } from './cartSlice';
import RoundColor from '../../components/UI/RoundColor/RoundColor';
import { ReactComponent as IconClose } from '../../icons/iconClose.svg';
import { ReactComponent as IconMinus } from '../../icons/iconMinus.svg';
import { ReactComponent as IconPlus } from '../../icons/iconPlus.svg';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  console.log('cartItems: ', cartItems);
  return (
    <div className="cart">
      <div className="cart__header-wrapper grid">
        <div className="cart__titles-wrap">
          <div className="cart__header-title-wrap">
            <h2 className="cart__header-title">Корзина покупок</h2>
          </div>
        </div>
        <div className="cart__right-subtitles-wrap">
          <p className="cart__header-subtitle cart__quantity-subtitle">Количество</p>
          <p className="cart__header-subtitle cart__price-subtitle">Цена</p>
        </div>
      </div>
      {cartItems.length > 0 &&
        cartItems.map(cartItem => (
          <div className="cart__content grid">
            <div key={cartItem.vendor} className="cart__left-info">
              <div className="cart__img-item-wrap">
                <img
                  className="cart__img-item"
                  src={`/img/products/${cartItem.img}`}
                  alt="product img"
                />
              </div>
              <div className="cart__text-wrap">
                <div className="cart__title-icon-wrap">
                  <h3 className="cart__title">{cartItem.title}</h3>
                  <IconClose />
                </div>
                <div className="cart__params-block">
                  <span className="cart__size">Размер: {cartItem.size}</span>
                  <span className="cart__color">
                    Цвет:{' '}
                    <RoundColor
                      className="cart__color-icon"
                      style={{ backgroundColor: cartItem.color }}
                      color={cartItem.color}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="cart__right-info">
              <div className="cart__counter-wrap">
                <div className="cart__counter">
                  <button className="cart__counter-minus-btn counter-btns">
                    <IconMinus />
                  </button>
                  <span className="cart__counter-amount">1</span>
                  <button className="cart__counter-plus-btn counter-btns">
                    <IconPlus />
                  </button>
                </div>
              </div>

              <div className="cart__item-price">{cartItem.price} ₽</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
