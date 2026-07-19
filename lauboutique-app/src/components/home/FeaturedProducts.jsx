import { products } from "../../data/products";
import ProductCard from "../catalog/ProductCard";
import "./FeaturedProducts.css";

// Muestra los primeros 4 productos como "destacados".
// Más adelante se puede marcar manualmente cuáles son favoritos con un campo featured: true.
const featured = products.slice(0, 4);

export default function FeaturedProducts() {
  return (
    <section className="featured">
      <h2 className="featured__title">Nuestras favoritas de la semana</h2>
      <div className="featured__grid">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}