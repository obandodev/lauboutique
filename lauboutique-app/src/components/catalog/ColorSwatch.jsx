import "./ColorSwatch.css";

const COLOR_MAP = {
  azul: "var(--color-azul)",
  negro: "var(--color-negro)",
  amarillo: "var(--color-amarillo)"
};

export default function ColorSwatch({ color, isSelected, onClick }) {
  return (
    <button
      type="button"
      className={`swatch ${isSelected ? "swatch--selected" : ""}`}
      style={{ backgroundColor: COLOR_MAP[color] }}
      onClick={() => onClick(color)}
      aria-label={`Color ${color}`}
      title={color}
    />
  );
}