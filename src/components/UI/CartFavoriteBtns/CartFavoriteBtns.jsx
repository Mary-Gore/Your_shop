import { VscHeart } from 'react-icons/vsc';
//import { VscHeartFilled } from "react-icons/vsc";
import { LiaShoppingBagSolid } from 'react-icons/lia';

const CartFavoriteBtns = () => {
  return (
    <div className="cart-btns">
      <VscHeart className="cart-btns__favorite-icon favorite-icon" />
      <LiaShoppingBagSolid className="cart-btns__cart-icon" />
    </div>
  );
};

export default CartFavoriteBtns;
