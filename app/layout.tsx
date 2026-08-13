import "./globals.css";
import Link from "next/link";
import { CartProvider } from "./context/cartcontext";
import CartCount from "./components/cartcount";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <header className="p-4 border-b flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              My Shop 🛍️
            </Link>
            <Link href="/cart" className="font-semibold">
              Cart (<CartCount />)
            </Link>
          </header>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}