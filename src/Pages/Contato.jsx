// src/pages/Contato.jsx
import React, { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";

function Contato() {
  useEffect(() => {
    // rola suavemente até o footer ao entrar na página
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      style={{
        padding: "4rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1>Entre em Contato</h1>
      <p>Veja abaixo nossas formas de contato!</p>

      {/* Seta animada apontando para o footer */}
      <div
        style={{
          marginTop: "1rem",
          animation: "bounce 1.5s infinite",
        }}
      >
        <FaArrowDown size={40} color="#007bff" />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}

export default Contato;
