import { NavLink } from 'react-router-dom';

const ExtraMenu = ({ category }) => {
  return (
    <>
      <ul className="extra-menu">
        <NavLink
          to="clothes"
          className={({ isActive }) =>
            isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
          }
          relative="path"
        >
          Одежда
        </NavLink>
        <NavLink
          to="shoes"
          className={({ isActive }) =>
            isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
          }
        >
          Обувь
        </NavLink>
        <NavLink
          to="accessories"
          className={({ isActive }) =>
            isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
          }
        >
          Аксессуары
        </NavLink>
        {category === 'women' && (
          <NavLink
            to="beauty"
            className={({ isActive }) =>
              isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
            }
          >
            Красота
          </NavLink>
        )}
      </ul>
    </>
  );
};

export default ExtraMenu;
