import ProductCard from "./ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products, filterColor }) {
  if (products.length === 0) {
    return (
      <p className="product-grid__empty">
        No hay productos disponibles con esos filtros.
      </p>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} filterColor={filterColor} />
      ))}
    </div>
  );
}