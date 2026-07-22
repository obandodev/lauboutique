import { useEffect, useState } from "react";
import Carousel from "../ui/Carousel";
import ColorSwatch from "./ColorSwatch";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import "./ProductModal.css";

function formatPrice(price) {
  return price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
}


export default function ProductModal({ product, onClose }) {
  const [activeColor, setActiveColor] = useState(product.colors[0].name);
  const [activeSize, setActiveSize] = useState(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const activeVariant =
    product.colors.find((c) => c.name === activeColor) ?? product.colors[0];

  const whatsappLink = buildWhatsAppLink(
    product,
    activeColor,
    activeSize
  );

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="product-modal__backdrop"
      onClick={handleBackdropClick}
    >
      <div className="product-modal">
        <button
          className="product-modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="product-modal__carousel">
          <Carousel
            images={activeVariant.photos}
            alt={`${product.name} — ${activeVariant.name}`}
          />
        </div>

        <div className="product-modal__info">
          <h2 className="product-modal__name">
            {product.name}
          </h2>

          <p className="product-modal__price">
            {formatPrice(product.price)}
          </p>

          {/* Colores */}
          <div className="product-modal__section">
            <span className="product-modal__label">
              Color
            </span>

            <div className="product-modal__colors">
              {product.colors.map((color) => (
                <ColorSwatch
                  key={color.name}
                  color={color.name}
                  isSelected={color.name === activeColor}
                  onClick={setActiveColor}
                />
              ))}
            </div>
          </div>

          <div className="product-modal__section">
            <span className="product-modal__label">
              Talla
            </span>

            <div className="product-modal__sizes">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`product-modal__size ${
                    activeSize === size
                      ? "product-modal__size--active"
                      : ""
                  }`}
                  onClick={() => setActiveSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="product-modal__buy"
          >
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}