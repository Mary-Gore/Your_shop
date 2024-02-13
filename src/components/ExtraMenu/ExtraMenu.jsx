import { NavLink, useParams } from 'react-router-dom';

const ExtraMenu = () => {
  const audience = useParams().audience;
  return (
    <>
      <ul className="extra-menu">
        <NavLink
          to={`../${audience}/clothes`}
          className={({ isActive }) =>
            isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
          }
        >
          Одежда
        </NavLink>
        <NavLink
          to={`../${audience}/shoes`}
          className={({ isActive }) =>
            isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
          }
        >
          Обувь
        </NavLink>
        <NavLink
          to={`../${audience}/accessories`}
          className={({ isActive }) =>
            isActive ? 'extra-menu__link extra-menu__link_active' : 'extra-menu__link'
          }
        >
          Аксессуары
        </NavLink>
        {audience === 'women' && (
          <NavLink
            to={`../${audience}/beauty`}
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
