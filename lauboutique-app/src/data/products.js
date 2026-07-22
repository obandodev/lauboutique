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
  }
];

export const garmentTypes = ["vestidos", "tops", "blusas"];
export const allColors = ["azul", "negro", "amarillo"];
export const allSizes = ["XS", "S", "M", "L", "XL"];