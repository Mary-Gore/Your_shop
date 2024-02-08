import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <>
      (
      {breadcrumbs.map(({ breadcrumb }) => {
        console.log(breadcrumbs);
        return breadcrumb;
      })}
      )
    </>
  );
};

export default Breadcrumbs;
