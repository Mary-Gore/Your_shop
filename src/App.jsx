import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Catalog from './components/pages/Catalog';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/:audience?/:prod_category?" element={<Catalog />} />
            {/*
            <Route index element={<Home />} />
            <Route path="women" element={<Women />}>
              <Route index element={<CategoryHome />} />
              <Route path="clothes" element={<Clothes />} />
              <Route path="shoes" element={<Shoes />} />
              <Route path="accessories" element={<Accessories />} />
              <Route path="beauty" element={<Beauty />} />
            </Route>
            <Route path="men" element={<Men />}>
              <Route index element={<CategoryHome />} />
              <Route path="clothes" element={<Clothes />} />
              <Route path="shoes" element={<Shoes />} />
              <Route path="accessories" element={<Accessories />} />
            </Route>
            <Route path="children" element={<Children />}>
              <Route index element={<CategoryHome />} />
              <Route path="clothes" element={<Clothes />} />
              <Route path="shoes" element={<Shoes />} />
              <Route path="accessories" element={<Accessories />} />
            </Route>
*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
