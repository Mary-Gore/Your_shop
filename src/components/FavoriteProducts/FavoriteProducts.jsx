import React, { useState } from 'react';
import ProductsCard from '../ProductCard/ProductCard';
import { toggleFavoriteProds, selectFavoriteProducts } from '../../features/products/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../UI/Modal/Modal';
import { addToCart } from '../../features/cart/cartSlice';

const FavoriteProducts = () => {
  const favoriteProducts = useSelector(selectFavoriteProducts),
    dispatch = useDispatch(),
    [prodFavoriteModal, setProdFavoriteModal] = useState([]),
    [isModalParamsOpen, setModalParamsOpen] = useState(false),
    [sizeModal, setSizeModal] = useState(''),
    [colorModal, setColorModal] = useState('');

  const handleModal = prod => {
    setProdFavoriteModal(prod);
    setModalParamsOpen(true);
  };

  const addToCartHandler = (product, color, size) => {
    if (color && size) {
      dispatch(addToCart({ ...product, color, size }));
      setModalParamsOpen(false);
      setColorModal('');
      setSizeModal('');
    }
  };

  const handleFavorite = vendor => {
    dispatch(toggleFavoriteProds(vendor));
  };

  return (
    <>
      <ul className="fav-products-list">
        {favoriteProducts.map(product => (
          <ProductsCard
            key={product.vendor}
            vendor={product.vendor}
            prod={product}
            handleModal={handleModal}
            handleFavorite={handleFavorite}
          />
        ))}
      </ul>
      <Modal
        isOpen={isModalParamsOpen}
        onClose={() => setModalParamsOpen(false)}
        resetColor={() => setColorModal('')}
        resetSize={() => setSizeModal('')}
      >
        <div className="modal-sizes">
          <div className="modal-sizes-wrap">
            <h3 className="modal-params-title">Выберите размер:</h3>
            <ul className="modal-sizes-list">
              {Object.keys(prodFavoriteModal).length !== 0 &&
                prodFavoriteModal.sizes.map((size, index) => (
                  <li key={index} className="modal-sizes-list__item">
                    <span
                      className={
                        sizeModal === size
                          ? 'params__size-block params__size-block_active size-block'
                          : 'params__size-block size-block'
                      }
                      onClick={() => setSizeModal(size)}
                    >
                      {size}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="modal-colors-wrap">
          <h3 className="modal-params-title">Выберите цвет:</h3>
          <ul className="modal-colors-list">
            {Object.keys(prodFavoriteModal).length !== 0 &&
              prodFavoriteModal.colors.map((color, index) => (
                <li key={index} className="modal-colors-list__item">
                  <span
                    style={{ backgroundColor: color }}
                    className={
                      colorModal === color
                        ? 'params__color-block color-block color-block_active'
                        : 'params__color-block color-block'
                    }
                    onClick={() => setColorModal(color)}
                  ></span>
                </li>
              ))}
          </ul>
        </div>
        <button
          className="modal-sucess-btn"
          onClick={() => {
            addToCartHandler(prodFavoriteModal, colorModal, sizeModal);
          }}
        >
          Готово
        </button>
      </Modal>
    </>
  );
};

export default FavoriteProducts;
