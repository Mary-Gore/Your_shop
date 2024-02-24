import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Catalog from './components/pages/Catalog';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/:audience?/:prod_category?" element={<Catalog />} />
            <Route path="/:audience?/:prod_category?/:prod_id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
