// Arma un link de WhatsApp con mensaje pre-cargado para un producto específico.
const WHATSAPP_NUMBER = "573103070804"; // sin +, sin espacios, con código de país

export function buildWhatsAppLink(product, activeColor) {
  const message =
    `Hola! Estoy interesada en comprar el ${product.name}, ` +
    `color ${activeColor}, precio $${product.price.toLocaleString("es-CO")}. ` +
    `¿Me ayudan con la compra?`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}