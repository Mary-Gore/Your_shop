import { useSelector } from 'react-redux';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { selectProducts } from '../../../features/products/productsSlice';

const Breadcrumbs = () => {
  const vendor = useParams().vendor,
    audience = useParams().audience,
    category = useParams()['prod_category'],
    products = useSelector(selectProducts);

  const findTitle = () => {
    if (vendor) {
      const indexProduct = products.findIndex(product => product.vendor === Number(vendor));
      return products[indexProduct].title;
    }
  };

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
    { path: `${audience}/${category}/${vendor}`, breadcrumb: `${findTitle()}` },
  ];

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
