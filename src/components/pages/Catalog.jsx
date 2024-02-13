import { useParams } from 'react-router-dom';
import Products from '../../features/products/Products';
import ExtraMenu from '../ExtraMenu/ExtraMenu';
import FIlterBtn from '../UI/FilterBtn/FilterBtn';
import SortBtn from '../UI/SortBtn/SortBtn';

const Catalog = () => {
  const audience = useParams().audience;
  return (
    <>
      <p>Catalog</p>
      {audience && <ExtraMenu />}
      <div className="content-bar-wrap">
        <FIlterBtn className="filter-btn" />
        <SortBtn />
      </div>
      <Products />
    </>
  );
};

export default Catalog;
