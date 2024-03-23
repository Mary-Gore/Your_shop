//import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconMinus } from '../../icons/iconMinus.svg';
import { ReactComponent as IconPlus } from '../../icons/iconPlus.svg';
import { decrementCounter, incrementCounter } from './counterSlice';
import { selectCounterQuantity } from './counterSlice';

const Counter = ({ cartItem, decrement, increment, price, setTotalSum }) => {
  const dispatch = useDispatch(),
    quantity = useSelector(selectCounterQuantity);
  console.log('quantity: ', quantity);
  // let [quantity, setQuantity] = useState(1);

  /*const decrementCounter = () => {
    if (quantity > 1) {
      setQuantity((quantity -= 1));
      setTotalSum(price * quantity);
    }
  };

  const incrementCounter = () => {
    setQuantity((quantity += 1));
    setTotalSum(price * quantity);
  }; */

  return (
    <div className="product__counter counter">
      <button
        className="counter__minus-btn counter-btns"
        /* onClick={() => (cartItem.cartQuantity ? decrement(cartItem) : decrementCounter())} */
        onClick={() =>
          cartItem.cartQuantity ? decrement(cartItem) : dispatch(decrementCounter(cartItem))
        }
      >
        <IconMinus />
      </button>
      <span className="counter__amount">
        {cartItem.cartQuantity ? cartItem.cartQuantity : quantity}
      </span>
      <button
        className="counter__plus-btn counter-btns"
        /* onClick={() => (cartItem.cartQuantity ? increment(cartItem) : incrementCounter())} */
        onClick={() =>
          cartItem.cartQuantity ? decrement(cartItem) : dispatch(incrementCounter(cartItem))
        }
      >
        <IconPlus />
      </button>
    </div>
  );
};

export default Counter;
