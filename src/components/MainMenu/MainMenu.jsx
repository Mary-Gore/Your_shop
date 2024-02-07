import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../features/filter/filterSlice';

const MainMenu = () => {
  const dispatch = useDispatch();

  const handleAudience = catName => {
    catName = catName.toLowerCase();
    switch (catName) {
      case 'женщинам':
        return 'women';
      case 'мужчинам':
        return 'men';
      case 'детям':
        return 'children';
      default:
        return '';
    }
  };

  return (
    <>
      <ul className="main-menu">
        <NavLink
          to="women"
          className={({ isActive }) =>
            isActive ? 'main-menu__link main-menu__link_active' : 'main-menu__link'
          }
          onClick={e => dispatch(setCategory(handleAudience(e.target.textContent)))}
        >
          Женщинам
        </NavLink>
        <NavLink
          to="men"
          className={({ isActive }) =>
            isActive ? 'main-menu__link main-menu__link_active' : 'main-menu__link'
          }
          onClick={e => dispatch(setCategory(handleAudience(e.target.textContent)))}
        >
          Мужчинам
        </NavLink>
        <NavLink
          to="children"
          className={({ isActive }) =>
            isActive ? 'main-menu__link main-menu__link_active' : 'main-menu__link'
          }
          onClick={e => dispatch(setCategory(handleAudience(e.target.textContent)))}
        >
          Детям
        </NavLink>
      </ul>
    </>
  );
};

export default MainMenu;
