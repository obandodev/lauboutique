import "./BrandStory.css";

export default function BrandStory() {
  return (
    <section className="brand-story">
      <img
        src="/placeholders/placeholder-3.jpg"
        alt="LauBoutique"
        className="brand-story__image"
      />
      <div className="brand-story__text">
        <h2 className="brand-story__title">Nuestra historia</h2>
        <p className="brand-story__paragraph">
          LauBoutique nace de la idea de que la elegancia no tiene que ser
          incómoda ni forzada. Cada pieza se elige pensando en esos días
          tranquilos y también en esas ocasiones especiales — porque no hace
          falta cambiar de estilo para sentirte bien en ambos.
        </p>
      </div>
    </section>
  );
}