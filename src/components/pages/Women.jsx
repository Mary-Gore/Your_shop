import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import ExtraMenu from '../ExtraMenu/ExtraMenu';
import FilterBtn from '../UI/FilterBtn/FilterBtn';
import SortBtn from '../UI/SortBtn/SortBtn';

const Women = () => {
  return (
    <>
      <h1>Women</h1>
      <ExtraMenu category="women" />
      <div className="content-bar-wrap">
        <FilterBtn className="filter-btn" />
        <Breadcrumbs />
        <SortBtn />
      </div>
      <Outlet />
    </>
  );
};

export default Women;
