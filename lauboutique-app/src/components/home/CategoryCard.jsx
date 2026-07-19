import { Link } from "react-router-dom";
import "./CategoryCard.css";

// Tarjeta grande de categoría. Lleva al catálogo ya filtrado por tipo.
export default function CategoryCard({ title, image, type }) {
  return (
    <Link to={`/catalogo?tipo=${type}`} className="category-card">
      <img src={image} alt={title} className="category-card__image" />
      <span className="category-card__label">{title}</span>
    </Link>
  );
}