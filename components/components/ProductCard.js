export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg bg-white">
      <img
        src={product.image || "https://via.placeholder.com/300?text=No+Image"}
        alt={product.title}
        className="w-full h-48 object-contain mb-3"
      />
      <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>
      <p className="text-gray-600 mt-1">Rs {product.price.toFixed(2)}</p>
    </div>
  );
}
