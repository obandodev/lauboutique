import { useMemo, useState } from "react";
import { products } from "../data/products";

// Hook que maneja el filtro en cascada: tipo de prenda -> color -> talla.
// Ahora "color" filtra productos que TENGAN esa variante
export function useProductFilters() {
  const [type, setType] = useState(null);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  const productsByType = useMemo(() => {
    if (!type) return products;
    return products.filter((p) => p.type === type);
  }, [type]);

  // Colores disponibles: todos los nombres de variantes presentes en este tipo.
  const availableColors = useMemo(() => {
    const names = productsByType.flatMap((p) => p.colors.map((c) => c.name));
    return [...new Set(names)];
  }, [productsByType]);

  // Un producto pasa el filtro de color si tiene AL MENOS una variante con ese color.
  const productsByColor = useMemo(() => {
    if (!color) return productsByType;
    return productsByType.filter((p) => p.colors.some((c) => c.name === color));
  }, [productsByType, color]);

  const availableSizes = useMemo(() => {
    return [...new Set(productsByColor.flatMap((p) => p.sizes))];
  }, [productsByColor]);

  const filteredProducts = useMemo(() => {
    if (!size) return productsByColor;
    return productsByColor.filter((p) => p.sizes.includes(size));
  }, [productsByColor, size]);

  function selectType(nextType) {
    setType(nextType);
    setColor(null);
    setSize(null);
  }

  function selectColor(nextColor) {
    setColor(nextColor);
    setSize(null);
  }

  function selectSize(nextSize) {
    setSize(nextSize);
  }

  function clearFilters() {
    setType(null);
    setColor(null);
    setSize(null);
  }

  return {
    filters: { type, color, size },
    availableColors,
    availableSizes,
    filteredProducts,
    selectType,
    selectColor,
    selectSize,
    clearFilters,
  };
}