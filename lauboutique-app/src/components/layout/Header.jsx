import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <div className="header__bar">
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
          LauBoutique
        </NavLink>

        <button
          className={`header__burger ${isOpen ? "header__burger--open" : ""}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `header__link ${isActive ? "header__link--active" : ""}`
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}