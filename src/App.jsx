import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home/Home';
import Women from './components/pages/Women';
import Men from './components/pages/Men';
import Children from './components/pages/Children';
import Clothes from './components/pages/Clothes';
import Shoes from './components/pages/Shoes';
import Accessories from './components/pages/Accessories';
import Beauty from './components/pages/Beauty';
//mport Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="women" element={<Women />}>
              <Route path="clothes" element={<Clothes />} />
              <Route path="shoes" element={<Shoes />} />
              <Route path="accessories" element={<Accessories />} />
              <Route path="beauty" element={<Beauty />} />
            </Route>
            <Route path="men" element={<Men />}>
              <Route path="clothes" element={<Clothes />} />
              <Route path="shoes" element={<Shoes />} />
              <Route path="accessories" element={<Accessories />} />
            </Route>
            <Route path="children" element={<Children />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
