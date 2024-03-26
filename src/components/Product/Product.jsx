import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProducts } from '../../features/products/productsSlice';
import Counter from '../../features/counter/Counter';
import ButtonStroke from '../UI/Button/ButtonStroke';
import ButtonFill from '../UI/Button/ButtonFill';
import { selectCounterQuantity } from '../../features/counter/counterSlice';

const Product = () => {
  const vendor = Number(useParams().vendor),
    products = useSelector(selectProducts),
    quantity = useSelector(selectCounterQuantity),
    prodIndex = products.findIndex(prod => prod.vendor === vendor),
    product = products[prodIndex];

  return (
    <div className="product">
      <div className="grid">
        <div className="prod-gallery"></div>
        <div className="prod-info">
          <h1>{product.title}</h1>
          <div className="product__sizes">
            <p className="product__sizes-title">Размеры</p>
            <ul className="product__sizes-list">
              {product.sizes.map((size, index) => (
                <li key={index} className="product__sizes-item">
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <button className="product__sizes-grid">Размерная сетка</button>
          <div className="product__colors">
            <p className="product__colors-title">Цвет</p>
            <ul className="product__colors-list">
              {product.colors.map((color, index) => (
                <li
                  key={index}
                  className={'product__color'}
                  style={{ backgroundColor: color }}
                  color={color}
                />
              ))}
            </ul>
          </div>
          <span className="product__price">{product.price * quantity} ₽</span>
          <div className="product__order-block">
            <Counter cartItem={product}></Counter>
            <ButtonStroke className="product__btn-stroke">В корзину</ButtonStroke>
            <ButtonFill className="product__btn-fill">Быстрый заказ</ButtonFill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
