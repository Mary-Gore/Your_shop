import SearchProduct from '../../features/searchProduct/SearchProduct';

const TopBar = () => {
  return (
    <div className="top-bar">
      <button className="top-bar__location-btn">Москва</button>
      <SearchProduct />
      <div className="top-bar__login">
        <button className="top-bar__sign-in-btn">Вход</button>
        {/* <button className="top-bar__log-out-btn">Выход</button> */}
      </div>
    </div>
  );
};

export default TopBar;
