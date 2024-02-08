import { Outlet } from 'react-router-dom';
import ExtraMenu from '../ExtraMenu/ExtraMenu';
import FIlterBtn from '../UI/FilterBtn/FilterBtn';
import SortBtn from '../UI/SortBtn/SortBtn';

const Men = () => {
  return (
    <div>
      <ExtraMenu />
      <div className="content-bar-wrap">
        <FIlterBtn className="filter-btn" />
        <SortBtn />
      </div>
      <Outlet />
    </div>
  );
};

export default Men;
