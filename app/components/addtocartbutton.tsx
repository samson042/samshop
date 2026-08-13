"use client";
import { useCart } from "../context/cartcontext";

export default function AddToCartButton({
  product,
}: {
  product: { id: number; name: string; price: number; imageUrl: string };
}) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
    >
      Add to Cart
    </button>
  );
}