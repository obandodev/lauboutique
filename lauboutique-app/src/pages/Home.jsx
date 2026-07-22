import { Link } from "react-router-dom";
import Categories from "../components/home/Categories";
import BrandStory from "../components/home/BrandStory";
import TrustBar from "../components/home/TrustBar";
import InstagramCta from "../components/home/InstagramCta";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="home__hero">
          <h1 className="home__title">Elegancia tranquila,<br />todos los días</h1>
          <p className="home__subtitle">
            Vestidos, tops y blusas pensados para tu día a día y tus salidas especiales.
          </p>
          <Link to="/catalogo" className="home__cta">
            Ver catálogo
          </Link>
        </div>
      </section>

      <Categories />
      <BrandStory />
      <TrustBar />
      <InstagramCta />
    </>
  );
}