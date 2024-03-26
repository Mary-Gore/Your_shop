import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as IconMinus } from '../../icons/iconMinus.svg';
import { ReactComponent as IconPlus } from '../../icons/iconPlus.svg';
import { decrementCounter, incrementCounter } from './counterSlice';
import { selectCounterQuantity } from './counterSlice';

const Counter = ({ cartItem, decrement, increment }) => {
  const dispatch = useDispatch(),
    quantity = useSelector(selectCounterQuantity);

  return (
    <div className="product__counter counter">
      <button
        className="counter__minus-btn counter-btns"
        onClick={() =>
          cartItem.cartQuantity ? decrement(cartItem) : dispatch(decrementCounter(cartItem))
        }
      >
        <IconMinus />
      </button>
      <span className="counter__amount">
        {cartItem.cartQuantity ? cartItem.cartQuantity : quantity ? quantity : 1}
      </span>
      <button
        className="counter__plus-btn counter-btns"
        onClick={() =>
          cartItem.cartQuantity ? increment(cartItem) : dispatch(incrementCounter(cartItem))
        }
      >
        <IconPlus />
      </button>
    </div>
  );
};

export default Counter;
