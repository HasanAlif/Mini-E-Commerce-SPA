import { products } from "../data/products";


export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Welcome to the Mini E-Commerce SPA
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Shop the latest products at unbeatable prices.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map(product => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <img src={product.image} alt={product.title} className="w-full h-60 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-semibold">${product.price}</span>
              <span className="text-sm text-yellow-500">⭐ {product.rating.rate}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
