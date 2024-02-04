import { Outlet } from 'react-router-dom';
import ExtraMenu from '../ExtraMenu/ExtraMenu';

const Men = () => {
  return (
    <div>
      <ExtraMenu />
      <Outlet />
      <h1>Men page</h1>
    </div>
  );
};

export default Men;
