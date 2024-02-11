import { NavLink, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useDispatch, useSelector } from 'react-redux';
/*import {
  selectProdCategory,
  selectCategory,
  resetProdCategory,
  resetCategory,
} from '../../../features/filter/filterSlice'; */

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
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();
  const dispatch = useDispatch();
  //const prodCategory = useSelector(selectProdCategory);
  // const category = useSelector(selectCategory);

  /*const handlePath = path => {
    if (path === '/women' || path === '/men' || path === '/children') {
      if (prodCategory !== '') dispatch(resetProdCategory());
    } else if (path === '/') {
      if (category !== '') dispatch(resetCategory());
    }
  }; */

  return (
    <nav aria-label="Страницы">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink
          aria-current="page"
          className={
            match.pathname === location.pathname ? 'crumb-link crumb-link_active' : 'crumb-link'
          }
          key={match.pathname}
          to={match.pathname}
          // onClick={() => handlePath(match.pathname)}
        >
          {breadcrumb}
        </NavLink>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
