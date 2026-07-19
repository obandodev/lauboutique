// Datos de productos de ejemplo.
// Cada producto puede tener varias variantes de color, y cada variante
// trae su propio set de fotos (así el carrusel cambia según el color elegido).

const placeholder = (n) => `/placeholders/placeholder-${n}.jpg`;

export const products = [
  {
    id: "vestido-01",
    name: "Vestido Amalia",
    type: "vestidos",
    sizes: ["S", "M", "L"],
    price: 189000,
    colors: [
      { name: "azul", photos: [placeholder(1), placeholder(2)] },
      { name: "negro", photos: [placeholder(3), placeholder(4)] },
    ],
  },
  {
    id: "vestido-02",
    name: "Vestido Flora",
    type: "vestidos",
    sizes: ["XS", "S", "M"],
    price: 175000,
    colors: [
      { name: "amarillo", photos: [placeholder(5), placeholder(6)] },
    ],
  },
  {
    id: "top-01",
    name: "Top Bruma",
    type: "tops",
    sizes: ["XS", "S", "M", "L"],
    price: 89000,
    colors: [
      { name: "fucsia", photos: [placeholder(7)] },
      { name: "crema", photos: [placeholder(8)] },
    ],
  },
  {
    id: "top-02",
    name: "Top Coral",
    type: "tops",
    sizes: ["S", "M"],
    price: 95000,
    colors: [
      { name: "coral", photos: [placeholder(9), placeholder(10)] },
    ],
  },
  {
    id: "blusa-01",
    name: "Blusa Aurora",
    type: "blusas",
    sizes: ["S", "M", "L", "XL"],
    price: 129000,
    colors: [
      { name: "crema", photos: [placeholder(11), placeholder(12)] },
      { name: "lima", photos: [placeholder(13)] },
    ],
  },
  {
    id: "blusa-02",
    name: "Blusa Marea",
    type: "blusas",
    sizes: ["M", "L"],
    price: 135000,
    colors: [
      { name: "lima", photos: [placeholder(14)] },
    ],
  },
];

export const garmentTypes = ["vestidos", "tops", "blusas"];
export const allColors = ["coral", "fucsia", "lima", "crema"];
export const allSizes = ["XS", "S", "M", "L", "XL"];