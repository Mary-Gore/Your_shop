import { ReactComponent as IconSort } from '../../../icons/iconSort.svg';

const SortBtn = () => {
  return (
    <button className="sort-btn">
      <IconSort className="sort-icon" />
      Сортировка
    </button>
  );
};

export default SortBtn;
