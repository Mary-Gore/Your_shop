import { NavLink } from 'react-router-dom';

const MainMenu = () => {
  return (
    <>
      <ul className="main-menu">
        <NavLink
          to="women"
          className={({ isActive }) =>
            isActive ? 'main-menu__link main-menu__link_active' : 'main-menu__link'
          }
        >
          Женщинам
        </NavLink>
        <NavLink
          to="men"
          className={({ isActive }) =>
            isActive ? 'main-menu__link main-menu__link_active' : 'main-menu__link'
          }
        >
          Мужчинам
        </NavLink>
        <NavLink
          to="children"
          className={({ isActive }) =>
            isActive ? 'main-menu__link main-menu__link_active' : 'main-menu__link'
          }
        >
          Детям
        </NavLink>
      </ul>
    </>
  );
};

export default MainMenu;
