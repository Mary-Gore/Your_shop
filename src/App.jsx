import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Catalog from './components/pages/Catalog/Catalog';
import Product from './components/Product/Product';
import Cart from './features/cart/Cart';
import FavoriteProducts from './components/FavoriteProducts/FavoriteProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/Your_shop'}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/:audience?/:prod_category?" element={<Catalog />} />
            <Route path="/:audience?/:prod_category?/:vendor" element={<Product />} />
            <Route path="cart" element={<Cart />}></Route>
            <Route path="/favorite_products" element={<FavoriteProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
