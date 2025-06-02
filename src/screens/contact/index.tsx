/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .send("service_9dt2rid", "template_s8ffbc6", form, "wkEL2zCPzGgtdWy9c")
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => console.error("EmailJS error:", err));
  };

  return (
    <Box>
      <Box
        sx={{
          background: "linear-gradient(to right, #00ffaa, #0066ff)",
          color: "#000",
          textAlign: "center",
          height: "104px",
        }}
      ></Box>
      <Box sx={{ py: 10, px: 4, backgroundColor: "#0d0d0d", color: "#fff" }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Vamos trabalhar juntos
            </Typography>
            <Typography variant="body1" color="#ccc" mb={4}>
              Estamos baseados na cidade de Caldas da Rainha, não tendo sede
              fisica, há a possíbilidade de conhecer o cliente fisicamente, mas
              tudo é feito remotamente. Sem complicações, sem deslocações.
              Apenas resultados digitais reais.
            </Typography>
            <Typography variant="subtitle1" mb={1}>
              📧 Email:{" "}
              <span style={{ color: "#00ffaa" }}>
                franciscovieirawork@hotmail.com
              </span>
            </Typography>
            <Typography variant="subtitle1" mb={1}>
              📍 Localização: 100% Digital / Remoto
            </Typography>
            <Typography variant="subtitle1">
              📱 WhatsApp:{" "}
              <span style={{ color: "#00ffaa" }}>+351 932 141 109</span>
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            {submitted ? (
              <Typography color="#00ffaa" variant="h6">
                ✅ Mensagem enviada com sucesso. Obrigado pelo contacto!
              </Typography>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={sendEmail}
              >
                <TextField
                  fullWidth
                  label="Nome"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                  variant="outlined"
                  style={{ border: "1px solid white" }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  InputProps={{ style: { color: "#fff" } }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  sx={{ mb: 3 }}
                  variant="outlined"
                  style={{ border: "1px solid white" }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  InputProps={{ style: { color: "#fff" } }}
                />
                <TextField
                  fullWidth
                  label="Mensagem"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  sx={{ mb: 3 }}
                  variant="outlined"
                  style={{ border: "1px solid white" }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  InputProps={{ style: { color: "#fff" } }}
                />
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    color: "#00ffaa",
                    borderColor: "#00ffaa",
                    "&:hover": {
                      backgroundColor: "#00ffaa",
                      color: "#000",
                    },
                  }}
                >
                  Enviar mensagem
                </Button>
              </motion.form>
            )}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(to right, #00ffaa, #0066ff)",
          color: "#000",
          textAlign: "center",
          height: "40px",
        }}
      ></Box>
    </Box>
  );
};
