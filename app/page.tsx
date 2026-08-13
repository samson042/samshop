import { PrismaClient } from "./generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Link from "next/link";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

export default async function Home() {
  const products = await prisma.product.findMany();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to My Shop 🛍️</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="border rounded-lg p-4 shadow block hover:shadow-lg transition"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-600 text-sm">{product.category}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}