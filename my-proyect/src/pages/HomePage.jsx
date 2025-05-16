import HeaderComponent from "../components/HeaderComponent";
import { FaRocket } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=80",
];

function HomePage() {
  const saySomething = () => {
    alert("¡Bienvenido! Gracias por visitarnos 🚀");
  };

  // Duplicamos las imágenes para crear el loop infinito suave
  const repeatedImages = [...images, ...images];

  return (
    <>
      <HeaderComponent />

      <div className="home-container">
        <section className="intro-section">
          <h1 className="main-title">
            Bienvenido a <span className="brand-name">Mau Rojas</span> <FaRocket />
          </h1>
          <p className="subtitle">
            Impulsamos tu empresa al siguiente nivel con soluciones tecnológicas e inteligentes para tu crecimiento contable y empresarial.
          </p>
          <button className="cta-button" onClick={saySomething}>
            Pulsa aquí para comenzar
          </button>
        </section>

        <section className="carousel-section">
          <div className="carousel-track">
            {repeatedImages.map((img, index) => (
              <div className="carousel-item" key={index}>
                <img src={img} alt={`Imagen ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
