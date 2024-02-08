import { ReactComponent as FilterIcon } from '../../../icons/iconFilter.svg';

const FilterBtn = () => {
  return (
    <button className="filter-btn">
      <FilterIcon className="filter-icon" />
      Фильтры
    </button>
  );
};

export default FilterBtn;
