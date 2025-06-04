import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader: React.FC = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowLoader(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    if (showLoader) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 5000); // tempo de exibição: 3 segundos
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            backgroundColor: "#0d0d0d",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "2.5rem",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            ETRONIC DIGITALS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
            style={{
              fontSize: "1.2rem",
              color: "#ccc",
            }}
          >
            Bem-vindo
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
