import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { setProdCategory } from '../../features/filter/filterSlice';

const ExtraMenu = ({ category }) => {
  const dispatch = useDispatch();

  const handleCategory = catName => {
    catName = catName.toLowerCase();

    switch (catName) {
      case 'одежда':
        return 'clothes';
      case 'обувь':
        return 'shoes';
      case 'аксессуары':
        return 'accessories';
      case 'красота':
        return 'beauty';
      default:
        return '';
    }
  };

  return (
    <>
      <ul className="extra-menu">
        <NavLink
          to="clothes"
          className={({ isActive }) =>
            isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
          }
          onClick={e => dispatch(setProdCategory(handleCategory(e.target.textContent)))}
        >
          Одежда
        </NavLink>
        <NavLink
          to="shoes"
          className={({ isActive }) =>
            isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
          }
          onClick={e => dispatch(setProdCategory(handleCategory(e.target.textContent)))}
        >
          Обувь
        </NavLink>
        <NavLink
          to="accessories"
          className={({ isActive }) =>
            isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
          }
          onClick={e => dispatch(setProdCategory(handleCategory(e.target.textContent)))}
        >
          Аксессуары
        </NavLink>
        {category === 'women' && (
          <NavLink
            to="beauty"
            className={({ isActive }) =>
              isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
            }
            onClick={e => dispatch(setProdCategory(handleCategory(e.target.textContent)))}
          >
            Красота
          </NavLink>
        )}
      </ul>
    </>
  );
};

export default ExtraMenu;
