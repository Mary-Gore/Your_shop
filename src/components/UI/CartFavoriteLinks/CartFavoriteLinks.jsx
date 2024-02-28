import { Link } from 'react-router-dom';
import { ReactComponent as IconCart } from '../../../icons/iconCart.svg';
import IconFav from '../IconFav/IconFav';

const CartFavoriteBtns = () => {
  return (
    <div className="cart-links">
      <Link className="cart-links__favorite-link">
        <IconFav className="cart-links__favorite-icon" />
      </Link>
      <Link to="cart" className="cart-links__cart-link">
        <IconCart className="cart-links__cart-icon" />
      </Link>
    </div>
  );
};

export default CartFavoriteBtns;
