import Products from '../../features/Products/Products';
import FIlterBtn from '../UI/FilterBtn/FilterBtn';
import SortBtn from '../UI/SortBtn/SortBtn';

const Home = () => {
  return (
    <>
      <p> Home</p>
      <div className="content-bar-wrap">
        <FIlterBtn className="filter-btn" />
        <SortBtn />
      </div>
      <Products />
    </>
  );
};

export default Home;
