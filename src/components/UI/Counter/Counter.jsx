import { useState } from 'react';
import { ReactComponent as IconMinus } from '../../../icons/iconMinus.svg';
import { ReactComponent as IconPlus } from '../../../icons/iconPlus.svg';

const Counter = ({ cartItem, decrement, increment, price, setTotalSum }) => {
  let [quantity, setQuantity] = useState(1);

  const decrementCounter = () => {
    if (quantity > 1) {
      setQuantity((quantity -= 1));
      setTotalSum(price * quantity);
    }
  };

  const incrementCounter = () => {
    setQuantity((quantity += 1));
    setTotalSum(price * quantity);
  };

  return (
    <div className="product__counter counter">
      <button
        className="counter__minus-btn counter-btns"
        onClick={() => (cartItem.cartQuantity ? decrement(cartItem) : decrementCounter())}
      >
        <IconMinus />
      </button>
      <span className="counter__amount">
        {cartItem.cartQuantity ? cartItem.cartQuantity : quantity}
      </span>
      <button
        className="counter__plus-btn counter-btns"
        onClick={() => (cartItem.cartQuantity ? increment(cartItem) : incrementCounter())}
      >
        <IconPlus />
      </button>
    </div>
  );
};

export default Counter;
