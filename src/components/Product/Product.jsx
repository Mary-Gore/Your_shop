import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import { selectProducts } from '../../features/products/productsSlice';
import Counter from '../../features/counter/Counter';
import ButtonStroke from '../UI/Button/ButtonStroke';
import ButtonFill from '../UI/Button/ButtonFill';
import { resetCounter, selectCounterQuantity } from '../../features/counter/counterSlice';
import { addToCart } from '../../features/cart/cartSlice';

const Product = () => {
  const vendor = Number(useParams().vendor),
    products = useSelector(selectProducts),
    quantity = useSelector(selectCounterQuantity),
    prodIndex = products.findIndex(prod => prod.vendor === vendor),
    product = products[prodIndex],
    [sizeProduct, setSizeProduct] = useState(''),
    [colorProduct, setColorProduct] = useState(''),
    dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, colorProduct, sizeProduct, prodQuantity: quantity }));
    setColorProduct('');
    setSizeProduct('');
  };

  useEffect(() => {
    dispatch(resetCounter());
  }, [vendor]);

  return (
    <div className="product">
      <Breadcrumbs />
      <div className="grid">
        <div className="prod-gallery"></div>
        <div className="prod-info">
          <h1>{product.title}</h1>
          <div className="product__sizes">
            <p className="product__sizes-title">Размеры</p>
            <ul className="product__sizes-list">
              {product.sizes.map((size, index) => (
                <li
                  key={index}
                  className={
                    sizeProduct === size
                      ? 'product__sizes-item product__sizes-item_active'
                      : 'product__sizes-item'
                  }
                  onClick={() => setSizeProduct(size)}
                >
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
                  className={
                    colorProduct === color
                      ? 'product__color product__color_active'
                      : 'product__color'
                  }
                  style={{ backgroundColor: color }}
                  color={color}
                  onClick={() => setColorProduct(color)}
                ></li>
              ))}
            </ul>
          </div>
          <span className="product__price">{product.price * quantity} ₽</span>
          <div className="product__order-block">
            <Counter cartItem={product}></Counter>
            <ButtonStroke className="product__btn-stroke" onClick={() => addToCartHandler()}>
              В корзину
            </ButtonStroke>
            <ButtonFill className="product__btn-fill">Быстрый заказ</ButtonFill>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
