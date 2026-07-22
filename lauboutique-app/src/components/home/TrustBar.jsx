import "./TrustBar.css";

const ITEMS = [
  {
    text: "Envíos a todo huila y bogota",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7h11v9H3z" strokeLinejoin="round" />
        <path d="M14 10h4l3 3v3h-7z" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17.5" cy="18" r="1.8" />
      </svg>
    ),
  },
  {
    text: "Compra directo por WhatsApp",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 20l1.2-3.6A8 8 0 1 1 8.4 19L4 20Z" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: "Piezas seleccionadas a mano",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20s-7-4.35-9.5-8.6C1 8.5 2.7 5 6.2 5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.5 0 5.2 3.5 3.7 6.4C19 15.65 12 20 12 20Z" strokeLinejoin="round" />
      </svg>
    ),
  },
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