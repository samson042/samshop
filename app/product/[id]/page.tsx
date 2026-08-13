import { PrismaClient } from "../../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import AddToCartButton from "../../components/addtocartbutton";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    return <div className="p-8">Product not found</div>;
  }

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.category}</p>
      <p className="text-2xl font-bold mt-4">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <AddToCartButton product={product} />
    </main>
  );
}