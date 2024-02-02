import { NavLink } from 'react-router-dom';

const ExtraMenu = () => {
  return (
    <>
      <ul className="extra-menu">
        <NavLink to="clothes">Одежда</NavLink>
        <NavLink to="shoes">Обувь</NavLink>
        <NavLink to="accessories">Аксессуары</NavLink>
        <NavLink to="beauty">Красота</NavLink>
      </ul>
    </>
  );
};

export default ExtraMenu;
