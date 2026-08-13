"use client";
import { useCart } from "../context/cartcontext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <div className="p-8">Your cart is empty.</div>;
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-4">
          <div className="flex items-center gap-4">
            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">Qty: {item.quantity}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold">${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${total}</p>
        <button onClick={clearCart} className="text-sm underline">
          Clear cart
        </button>
      </div>
    </main>
  );
}