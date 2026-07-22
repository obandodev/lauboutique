import { Link } from "react-router-dom";
import "./CategoryCard.css";

export default function CategoryCard({ title, image, type }) {
  return (
    <Link to={`/catalogo?tipo=${type}`} className="category-card">
      <img src={image} alt={title} className="category-card__image" />
      <span className="category-card__label">{title}</span>
    </Link>
  );
}