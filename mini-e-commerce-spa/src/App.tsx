import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage"
import { Header } from './components/Header';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartProvider } from './context/CartContext';
import { CartSidebar } from './components/CartSidebar';

function App() {

  return (
    <CartProvider>
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>
        <CartSidebar />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
