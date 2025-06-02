import React from "react";
import { Fab } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa"; // Importando ícones
import { Link } from "react-router-dom"; // Para links (caso tenha navegação)

const FloatingButtons: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        position: "fixed",
        bottom: "20px",
        right: "40px",
        zIndex: 10000,
      }}
    >
      {/* Botão WhatsApp */}
      <Link
        to="https://api.whatsapp.com/send/?phone=%2B351932141109&text&type=phone_number&app_absent=0" // Substitua pelo seu número do WhatsApp
        target="_blank"
        rel="noopener noreferrer"
      >
        <Fab
          color="success"
          sx={{
            width: 60,
            height: 60,
            backgroundColor: "#25D366",
            marginBottom: "10px", // Espaço entre os botões
            "&:hover": {
              backgroundColor: "#128C7E", // Efeito de hover
            },
          }}
        >
          <FaWhatsapp style={{ color: "white", fontSize: "30px" }} />
        </Fab>
      </Link>

      {/* Botão Instagram */}
      {/* <Link
        to="https://www.instagram.com/obarbeirosoueu" // Substitua pelo seu link do Instagram
        target="_blank"
        rel="noopener noreferrer"
      >
        <Fab
          color="primary"
          sx={{
            width: 60,
            height: 60,
            backgroundColor: "#E1306C",
            "&:hover": {
              backgroundColor: "#C13584", // Efeito de hover
            },
          }}
        >
          <FaInstagram style={{ color: "white", fontSize: "30px" }} />
        </Fab>
      </Link> */}
    </div>
  );
};

export default FloatingButtons;
