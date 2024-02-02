import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home/Home';
import Women from './components/pages/Women';
import Men from './components/pages/Men';
import Children from './components/pages/Children';

//mport Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="women" element={<Women />} />
            <Route path="men" element={<Men />} />
            <Route path="children" element={<Children />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
