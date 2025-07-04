import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

export function Header() {
  const { getTotalItems, toggleCart } = useCart();
  const totalItems = getTotalItems();
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-cyan-600 hover:text-cyan-800"
            >
              Mini E-Commerce SPA
            </Link>
          </div>

          <nav>
            <Link
              to="/"
              className="text-xl text-cyan-600 hover:text-cyan-800 px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleCart}
              className="relative p-2 text-cyan-600 hover:text-cyan-800 transition-colors"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
