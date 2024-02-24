import { ReactComponent as IconSort } from '../../../icons/iconSort.svg';

const SortBtn = ({ onClick }) => {
  return (
    <button className="sort-btn" onClick={() => onClick()}>
      <IconSort className="sort-icon" />
      Сортировка
    </button>
  );
};

export default SortBtn;
