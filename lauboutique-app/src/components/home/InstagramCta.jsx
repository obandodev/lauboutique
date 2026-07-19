import "./InstagramCta.css";

const INSTAGRAM_URL = "https://www.instagram.com/obandoo_29";

export default function InstagramCta() {
  return (
    <section className="ig-cta">
      <h2 className="ig-cta__title">Seguinos en Instagram</h2>

      <p className="ig-cta__text">
        Mirá los looks completos, novedades y detrás de escena de LauBoutique.
      </p>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ig-cta__button"
      >
        @obandoo_29
      </a>
    </section>
  );
}