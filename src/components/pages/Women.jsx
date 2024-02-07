import { Outlet } from 'react-router-dom';
import ExtraMenu from '../ExtraMenu/ExtraMenu';
import Products from '../../features/Products/Products';

const Women = () => {
  return (
    <div>
      <ExtraMenu category="women" />
      <Outlet />
      <Products />
    </div>
  );
};

export default Women;
