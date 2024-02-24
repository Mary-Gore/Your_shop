import { ReactComponent as FilterIcon } from '../../../icons/iconFilter.svg';

const FilterBtn = ({ onClick }) => {
  return (
    <button className="filter-btn" onClick={() => onClick()}>
      <FilterIcon className="filter-icon" />
      Фильтры
    </button>
  );
};

export default FilterBtn;
