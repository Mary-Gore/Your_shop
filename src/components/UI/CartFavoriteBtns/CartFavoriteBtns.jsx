import { ReactComponent as IconCart } from '../../../icons/iconCart.svg';
import IconFav from '../IconFav/IconFav';

const CartFavoriteBtns = () => {
  return (
    <div className="cart-btns">
      <IconFav className="cart-btns__favorite-icon" />
      <IconCart className="cart-btns__cart-icon" />
    </div>
  );
};

export default CartFavoriteBtns;
