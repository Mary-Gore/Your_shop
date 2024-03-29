import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
/* Swiper imports */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
/* Componnets */
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import Counter from '../../features/counter/Counter';
/* UI */
import ButtonStroke from '../UI/Button/ButtonStroke';
import ButtonFill from '../UI/Button/ButtonFill';
/* Slices imports */
import { selectProducts } from '../../features/products/productsSlice';
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
    dispatch = useDispatch(),
    [thumbs, setThumbs] = useState(null);

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
        <div className="prod-gallery">
          <div className="prod-gallery__preview-wrap">
            {product.detailsImgs && (
              <Swiper
                className="preview-slider"
                direction={'vertical'}
                onSwiper={setThumbs}
                spaceBetween={35}
                slidesPerView={3}
                grabCursor={true}
              >
                {product.detailsImgs.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="preview-slider__img-wrap">
                      <img src={`/img/products/${src}`} alt="product img" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div className="prod-gallery__main-slider-wrap">
            <Swiper
              className="main-slider"
              direction={'vertical'}
              modules={[Thumbs]}
              thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
              spaceBetween={35}
              slidesPerView={1}
            >
              {product.detailsImgs &&
                product.detailsImgs.map((src, index) => (
                  <SwiperSlide key={index}>
                    <SwiperSlide className="main-slider__slide">
                      <img src={`/img/products/${src}`} alt="product img" />
                    </SwiperSlide>
                  </SwiperSlide>
                ))}

              {(!product.detailsImgs || product.detailsImgs.length === 0) && (
                <SwiperSlide>
                  <SwiperSlide className="main-slider__slide">
                    <img src={`/img/products/${product.img}`} alt="product img" />
                  </SwiperSlide>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
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
