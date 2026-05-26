import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AdminPage from './pages/AdminPage';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './pages/SplashScreen'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
       <Route path="/" element={<SplashScreen />} />

        {/* Main Home Page */}
        <Route path="/home" element={<HomePage />} />

        <Route path="/product/:id" element={<ProductDetailPage />} />

        <Route path="/admin@rizwan" element={<AdminPage />} />

      </Routes>
    </BrowserRouter>
  );
}
