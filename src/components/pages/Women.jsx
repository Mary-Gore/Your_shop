import { Outlet } from 'react-router-dom';
import ExtraMenu from '../ExtraMenu/ExtraMenu';

const Women = () => {
  return (
    <div>
      <h1>Women page</h1>
      <ExtraMenu category="women" />
      <Outlet />
    </div>
  );
};

export default Women;
