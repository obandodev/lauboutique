import CategoryCard from "./CategoryCard";
import "./Categories.css";

const CATEGORIES = [
  { title: "Vestidos", type: "vestidos", image: "/placeholders/placeholder-1.jpg" },
  { title: "Tops", type: "tops", image: "/placeholders/tops-categories.jpg" },
  { title: "Blusas", type: "blusas", image: "/placeholders/blusas-categories.jpg" },
];

export default function Categories() {
  return (
    <section className="categories">
      <h2 className="categories__title">Explorá por categoría</h2>
      <div className="categories__grid">
        {CATEGORIES.map((cat) => (
          <CategoryCard key={cat.type} {...cat} />
        ))}
      </div>
    </section>
  );
}