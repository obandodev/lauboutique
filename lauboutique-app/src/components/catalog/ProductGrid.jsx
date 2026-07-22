import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import "./ProductGrid.css";

export default function ProductGrid({ products, filterColor }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (products.length === 0) {
    return (
      <p className="product-grid__empty">
        No hay productos disponibles con esos filtros.
      </p>
    );
  }

  return (
    <>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            filterColor={filterColor}
            onOpen={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}