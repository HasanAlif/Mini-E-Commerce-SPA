import { ArrowLeft, ShoppingCart, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/useCart";

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center text-cyan-600 hover:text-cyan-800 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="aspect-square">
              {product ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-red-500">Product not found.</div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-cyan-600 font-medium mb-2 uppercase tracking-wide">
                  {product?.category}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product?.title}
                </h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          product && i < Math.floor(product.rating.rate)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {product?.rating?.rate} ({product?.rating?.count} reviews)
                  </span>
                </div>
                <div className="text-4xl font-bold text-gray-700 mb-6">
                  {product ? `$${product.price.toFixed(2)}` : null}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product?.description}
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-3 text-lg font-medium transition-colors"
                >
                  <ShoppingCart size={24} />
                  <span>Add to Cart</span>
                </button>
              </div>
              <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    High-quality materials and construction
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    Fast and reliable shipping
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    30-day return policy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    Customer support available 24/7
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
