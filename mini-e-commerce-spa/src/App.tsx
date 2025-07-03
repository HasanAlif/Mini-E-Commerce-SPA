import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage"
import { Header } from './components/Header';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartProvider } from './context/CartContext';

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
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;
