import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
/*import {
  setCategory,
  resetProdCategory,
  selectProdCategory,
} from '../../features/filter/filterSlice'; */

const MainMenu = () => {
  const dispatch = useDispatch();
  //const prodCategory = useSelector(selectProdCategory);

  const handleCatValues = catName => {
    const handleAudience = () => {
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

    // dispatch(setCategory(handleAudience()));
    // if (prodCategory !== '') dispatch(resetProdCategory());
  };

  return (
    <>
      <ul className="main-menu">
        <NavLink
          to="women"
          className={({ isActive }) =>
            isActive ? 'main-menu__link main-menu__link_active' : 'main-menu__link'
          }
          //   onClick={e => handleCatValues(e.target.textContent)}
        >
          Женщинам
        </NavLink>
        <NavLink
          to="men"
          className={({ isActive }) =>
            isActive ? 'main-menu__link main-menu__link_active' : 'main-menu__link'
          }
          // onClick={e => handleCatValues(e.target.textContent)}
        >
          Мужчинам
        </NavLink>
        <NavLink
          to="children"
          className={({ isActive }) =>
            isActive ? 'main-menu__link main-menu__link_active' : 'main-menu__link'
          }
          // onClick={e => handleCatValues(e.target.textContent)}
        >
          Детям
        </NavLink>
      </ul>
    </>
  );
};

export default MainMenu;
