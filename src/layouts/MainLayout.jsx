import { Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar/TopBar';
import LogoBlack from '../components/Logo/LogoBlack';
import MainMenu from '../components/MainMenu/MainMenu';
import CartFavoriteBtns from '../components/UI/CartFavoriteBtns/CartFavoriteBtns';

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
      <Outlet />
    </div>
  );
};

export default MainLayout;
