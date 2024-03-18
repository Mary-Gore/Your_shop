import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Catalog from './components/pages/Catalog/Catalog';
import Product from './components/Product/Product';
import Cart from './features/cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/:audience?/:prod_category?" element={<Catalog />} />
            <Route path="/:audience?/:prod_category?/product/:vendor" element={<Product />} />
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
