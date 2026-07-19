import { useState } from "react";
import "./Carousel.css";

// Carrusel genérico: recibe un array de imágenes y las va mostrando.
// No sabe si son fotos de un producto, un banner, etc. — solo pasa imágenes.
export default function Carousel({ images, alt }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  function goTo(nextIndex) {
    setIndex(nextIndex);
  }

  function next(e) {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  }

  function prev(e) {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  return (
    <div className="carousel">
      <img className="carousel__image" src={images[index]} alt={alt} />

      {images.length > 1 && (
        <>
          <button className="carousel__arrow carousel__arrow--left" onClick={prev} aria-label="Foto anterior">
            ‹
          </button>
          <button className="carousel__arrow carousel__arrow--right" onClick={next} aria-label="Foto siguiente">
            ›
          </button>

          <div className="carousel__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot ${i === index ? "carousel__dot--active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                aria-label={`Ir a foto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}