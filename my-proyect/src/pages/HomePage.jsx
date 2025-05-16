import HeaderComponent from "../components/HeaderComponent";
import { FaRocket } from "react-icons/fa";
import { useEffect, useState } from "react";

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1581092334395-91190be4c999?auto=format&fit=crop&w=1500&q=80", // Servidores y cables
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1500&q=80", // Persona con laptop y gráficos
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=80"  // Código en pantalla
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const saySomething = () => {
    console.log("Di Algo");
    alert("¡Bienvenido! Gracias por visitarnos 🚀");
  };

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
          <div className="carousel">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index}`}
                className={`carousel-image ${index === currentSlide ? "active" : ""}`}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
