const WHATSAPP_NUMBER = "573103070804"; 

export function buildWhatsAppLink(product, activeColor, activeSize) {
  const sizePart = activeSize ? `, talla ${activeSize}` : "";

  const message =
    `Hola! Estoy interesada en comprar el ${product.name}, ` +
    `color ${activeColor}${sizePart}, precio $${product.price.toLocaleString("es-CO")}. ` +
    `¿Me ayudan con la compra?`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}