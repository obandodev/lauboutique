import { garmentTypes, allSizes } from "../../data/products";
import ColorSwatch from "./ColorSwatch";
import "./FilterBar.css";

// Solo se encarga de mostrar los filtros y avisar cuando cambian.
// Toda la lógica de qué mostrar viene del hook useProductFilters.
export default function FilterBar({
  filters,
  availableColors,
  availableSizes,
  onSelectType,
  onSelectColor,
  onSelectSize,
  onClear,
}) {
  return (
    <div className="filter-bar">
      <FilterGroup label="Prenda">
        {garmentTypes.map((type) => (
          <button
            key={type}
            className={`filter-pill ${filters.type === type ? "filter-pill--active" : ""}`}
            onClick={() => onSelectType(type)}
          >
            {type}
          </button>
        ))}
      </FilterGroup>

      {filters.type && (
        <FilterGroup label="Color">
          {availableColors.map((color) => (
            <ColorSwatch
              key={color}
              color={color}
              isSelected={filters.color === color}
              onClick={onSelectColor}
            />
          ))}
        </FilterGroup>
      )}

      {filters.color && (
        <FilterGroup label="Talla">
          {allSizes
            .filter((s) => availableSizes.includes(s))
            .map((s) => (
              <button
                key={s}
                className={`filter-pill ${filters.size === s ? "filter-pill--active" : ""}`}
                onClick={() => onSelectSize(s)}
              >
                {s}
              </button>
            ))}
        </FilterGroup>
      )}

      {(filters.type || filters.color || filters.size) && (
        <button className="filter-clear" onClick={onClear}>
          Limpiar filtros
        </button>
      )}
    </div>
  );
}

// Sub-componente chico, solo para no repetir el label + wrapper en cada grupo.
function FilterGroup({ label, children }) {
  return (
    <div className="filter-group">
      <span className="filter-group__label">{label}</span>
      <div className="filter-group__options">{children}</div>
    </div>
  );
}