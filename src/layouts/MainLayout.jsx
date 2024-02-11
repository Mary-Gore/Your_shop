import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar/TopBar';
import LogoBlack from '../components/Logo/LogoBlack';
import MainMenu from '../components/MainMenu/MainMenu';
import CartFavoriteBtns from '../components/UI/CartFavoriteBtns/CartFavoriteBtns';
import Products from '../features/products/Products';

const MainLayout = () => {
  return (
    <div className="container">
      <header>
        <TopBar />
        <div className="header-wrapper">
          <LogoBlack />
          <MainMenu />
          <CartFavoriteBtns />
        </div>
      </header>
      <Products />
      <Outlet />
    </div>
  );
};

export default MainLayout;
