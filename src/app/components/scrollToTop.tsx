"use client"

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Monitorizar el desplazamiento de la página
  useEffect(() => {
    const handleScroll = () => {
        
      if (window.scrollY > 300) {
        setShowButton(true); // Mostrar el botón si el scroll es mayor a 300px
      } else {
        setShowButton(false); // Esconder el botón si el scroll es menor
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento cuando se desmonte el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para desplazarse al principio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
