import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import {
  selectCartItems,
  selectTotalQuantity,
  removeFromCart,
  getTotals,
  selectTotalPrice,
  minusQuantity,
  plusQuantity,
} from './cartSlice';
import RoundColor from '../../components/UI/RoundColor/RoundColor';
import { ReactComponent as IconClose } from '../../icons/iconClose.svg';
import Counter from '../../features/counter/Counter';

const Cart = () => {
  const cartItems = useSelector(selectCartItems),
    dispatch = useDispatch(),
    totalQuantity = useSelector(selectTotalQuantity),
    totalPrice = useSelector(selectTotalPrice);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems]);

  const decrement = cartItem => {
    dispatch(minusQuantity(cartItem));
  };

  const increment = cartItem => {
    dispatch(plusQuantity(cartItem));
  };

  return (
    <div className="cart">
      <div className="cart__header-wrapper grid">
        <div className="cart__header-title-wrap">
          <div className="cart__header-title-info">
            <h2 className="cart__header-title">Корзина покупок</h2>
            <span className="cart__quantity-icon">{totalQuantity}</span>
          </div>
        </div>
        <div className="cart__right-subtitles-wrap">
          <p className="cart__header-subtitle cart__quantity-subtitle">Количество</p>
          <p className="cart__header-subtitle cart__price-subtitle">Цена</p>
        </div>
      </div>
      {cartItems.length > 0 &&
        cartItems.map((cartItem, index) => (
          <div key={index} className="cart__content grid">
            <div className="cart__left-info">
              <div className="cart__img-item-wrap">
                <img
                  className="cart__img-item"
                  src={`img/products/${cartItem.img}`}
                  alt="product img"
                />
              </div>
              <div className="cart__text-wrap">
                <div className="cart__title-icon-wrap">
                  <h3 className="cart__title">{cartItem.title}</h3>
                  <span
                    className="cart__icon-close"
                    onClick={() => dispatch(removeFromCart(cartItem))}
                  >
                    <IconClose />
                  </span>
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
                <Counter cartItem={cartItem} increment={increment} decrement={decrement}></Counter>
              </div>
              <div className="cart__item-price">{cartItem.price * cartItem.cartQuantity} ₽</div>
            </div>
          </div>
        ))}
      <div className="cart__total">
        Итого: <span>{totalPrice} ₽</span>
      </div>
    </div>
  );
};

export default Cart;
