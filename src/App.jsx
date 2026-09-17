import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home.jsx';
import ProductsDetail from './pages/productsdetail.jsx';
// import Storefront from './pages/storefront';
import Login from './pages/login';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/productsdetail" element={<ProductsDetail />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Route */}
      </Routes>
    </BrowserRouter>
  );
}