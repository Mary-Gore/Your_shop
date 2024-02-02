import TopBar from '../TopBar/TopBar';
import LogoBlack from '../Logo/LogoBlack';
import MainMenu from '../MainMenu/MainMenu';
import ExtraMenu from '../ExtraMenu/ExtraMenu';
import CartFavoriteBtns from '../UI/CartFavoriteBtns/CartFavoriteBtns';

const Header = () => {
  return (
    <div className="container">
      <TopBar />
      <div className="header-wrapper">
        <LogoBlack />
        <div>
          <MainMenu />
          <ExtraMenu />
        </div>
        <CartFavoriteBtns />
      </div>
    </div>
  );
};

export default Header;
