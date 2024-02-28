import { Link, Outlet } from 'react-router-dom';
import TopBar from '../components/TopBar/TopBar';
import LogoBlack from '../components/Logo/LogoBlack';
import MainMenu from '../components/MainMenu/MainMenu';
import CartFavoriteLinks from '../components/UI/CartFavoriteLinks/CartFavoriteLinks';

const MainLayout = () => {
  return (
    <div className="container">
      <header>
        <TopBar />
        <div className="header-wrapper">
          <Link to=".">
            <LogoBlack />
          </Link>
          <MainMenu />
          <CartFavoriteLinks />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default MainLayout;
