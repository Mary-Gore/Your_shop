import { NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const routes = [
  { path: '/', breadcrumb: 'Главная' },
  { path: 'women', breadcrumb: 'Женщинам' },
  { path: 'women/clothes', breadcrumb: 'Одежда' },
  { path: 'women/shoes', breadcrumb: 'Обувь' },
  { path: 'women/accessories', breadcrumb: 'Аксессуары' },
  { path: 'women/beauty', breadcrumb: 'Красота' },
  { path: 'men', breadcrumb: 'Мужчинам' },
  { path: 'men/clothes', breadcrumb: 'Одежда' },
  { path: 'men/shoes', breadcrumb: 'Обувь' },
  { path: 'men/accessories', breadcrumb: 'Аксессуары' },
  { path: 'children', breadcrumb: 'Детям' },
  { path: 'children/clothes', breadcrumb: 'Одежда' },
  { path: 'childrens/shoes', breadcrumb: 'Обувь' },
  { path: 'children/accessories', breadcrumb: 'Аксессуары' },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes),
    location = useLocation();

  return (
    <nav className="breadcrumbs-nav" aria-label="Страницы">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink
          aria-current="page"
          className={
            match.pathname === location.pathname ? 'crumb-link crumb-link_active' : 'crumb-link'
          }
          key={match.pathname}
          to={match.pathname}
        >
          {breadcrumb}
        </NavLink>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
