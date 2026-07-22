import SocialLinks from "../components/ui/SocialLinks";
import "./SobreNosotros.css";

export default function SobreNosotros() {
  return (
    <section className="sobre-nosotros">
      <h1 className="sobre-nosotros__title">Sobre nosotros</h1>

      <p className="sobre-nosotros__text">
        LauBoutique nace de la idea de que la elegancia no tiene que ser
        incómoda ni forzada. Cada pieza se elige pensando en esos días
        tranquilos y también en esas ocasiones especiales — porque no hace
        falta cambiar de estilo para sentirte bien en ambos.
      </p>

      <div className="sobre-nosotros__contact">
        <h2 className="sobre-nosotros__subtitle">¿Tienes dudas?</h2>
        <p className="sobre-nosotros__text">
          Escribenos y te respondemos lo antes posible.
        </p>
        <SocialLinks />
      </div>
    </section>
  );
}