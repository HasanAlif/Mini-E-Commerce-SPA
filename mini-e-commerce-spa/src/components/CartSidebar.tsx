import { useState } from "react";
import { useCart } from "../context/useCart";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { CheckoutModal } from "./CheckoutModal";

export function CartSidebar() {
  const { state, removeFromCart, updateQuantity, toggleCart, getTotalPrice } =
    useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, quantity);
    }
  };

  return (
    <>
      {state.isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleCart}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm line-clamp-2">
                        {item.product.title}
                      </h3>
                      <p className="text-gray-600 font-semibold">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={16} />
                      </button>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.product.id,
                              item.quantity - 1
                            )
                          }
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {state.items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
      />
    </>
  );
}
