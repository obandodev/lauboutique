import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bar">
        <span className="footer__logo">LauBoutique</span>

        <span className="footer__copy">
          © {new Date().getFullYear()} LauBoutique
        </span>
      </div>
    </footer>
  );
}