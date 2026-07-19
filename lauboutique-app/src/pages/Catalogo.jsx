import { useProductFilters } from "../hooks/useProductFilters";
import FilterBar from "../components/catalog/FilterBar";
import ProductGrid from "../components/catalog/ProductGrid";
import "./Catalogo.css";

export default function Catalogo() {
  const {
    filters,
    availableColors,
    availableSizes,
    filteredProducts,
    selectType,
    selectColor,
    selectSize,
    clearFilters,
  } = useProductFilters();

  return (
    <section className="catalogo">
      <h1 className="catalogo__title">Catálogo</h1>

      <FilterBar
        filters={filters}
        availableColors={availableColors}
        availableSizes={availableSizes}
        onSelectType={selectType}
        onSelectColor={selectColor}
        onSelectSize={selectSize}
        onClear={clearFilters}
      />

      <ProductGrid products={filteredProducts} filterColor={filters.color} />
    </section>
  );
}