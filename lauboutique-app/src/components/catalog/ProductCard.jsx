import { useEffect, useState } from "react";
import Carousel from "../ui/Carousel";
import ColorSwatch from "./ColorSwatch";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import "./ProductCard.css";

function formatPrice(price) {
  return price.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });
}

export default function ProductCard({ product, filterColor }) {
  const { name, sizes, price, colors } = product;

  const [activeColor, setActiveColor] = useState(filterColor || colors[0].name);

  useEffect(() => {
    const stillValid = colors.some((c) => c.name === filterColor);
    setActiveColor(stillValid ? filterColor : colors[0].name);
  }, [filterColor, colors]);

  const activeVariant = colors.find((c) => c.name === activeColor) ?? colors[0];
  const whatsappLink = buildWhatsAppLink(product, activeColor);

  return (
    <article className="product-card">
      <Carousel images={activeVariant.photos} alt={`${name} — ${activeVariant.name}`} />

      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__price">{formatPrice(price)}</p>

        <div className="product-card__colors">
          {colors.map((c) => (
            <ColorSwatch
              key={c.name}
              color={c.name}
              isSelected={c.name === activeColor}
              onClick={setActiveColor}
            />
          ))}
        </div>

        <p className="product-card__sizes">{sizes.join(" · ")}</p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="product-card__buy">
          Comprar por WhatsApp
        </a>
      </div>
    </article>
  );
}