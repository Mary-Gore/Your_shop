import { Outlet } from 'react-router-dom';
import ExtraMenu from '../ExtraMenu/ExtraMenu';
import Products from '../../features/Products/Products';
import FIlterBtn from '../UI/FilterBtn/FilterBtn';
import SortBtn from '../UI/SortBtn/SortBtn';

const Children = () => {
  return (
    <div>
      <ExtraMenu />
      <Outlet />
      <div className="content-bar-wrap">
        <FIlterBtn className="filter-btn" />
        <SortBtn />
      </div>
      <Products />
    </div>
  );
};

export default Children;
