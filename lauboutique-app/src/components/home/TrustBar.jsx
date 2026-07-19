import "./TrustBar.css";

const ITEMS = [
  { icon: "🚚", text: "Envíos a todo el país" },
  { icon: "💬", text: "Compra directo por WhatsApp" },
  { icon: "🤍", text: "Piezas seleccionadas a mano" },
];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      {ITEMS.map((item) => (
        <div key={item.text} className="trust-bar__item">
          <span className="trust-bar__icon">{item.icon}</span>
          <span className="trust-bar__text">{item.text}</span>
        </div>
      ))}
    </section>
  );
}