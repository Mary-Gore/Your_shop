import { Outlet } from 'react-router-dom';
import ExtraMenu from '../ExtraMenu/ExtraMenu';
import Products from '../../features/Products/Products';

const Men = () => {
  return (
    <div>
      <ExtraMenu />
      <Outlet />
      <Products />
    </div>
  );
};

export default Men;
