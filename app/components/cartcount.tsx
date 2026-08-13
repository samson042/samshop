"use client";
import { useCart } from "../context/cartcontext";

export default function CartCount() {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  return <span>{count}</span>;
}