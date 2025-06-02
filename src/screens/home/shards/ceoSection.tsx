// src/components/CEOSection.jsx
import { Box, Grid, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const CEOSection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#0d0d0d",
        color: "#fff",
        py: 10,
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Grid size={{ xs: 12, md: 4 }} textAlign="center">
          <Avatar
            src="/New_Project.jpg"
            alt="CEO"
            sx={{
              width: 120,
              height: 120,
              mx: "auto",
              mb: 2,
              objectFit: "cover",
              objectPosition: "center 50%",
              transform: "scale(1)",
            }}
          />
          <Box sx={{ displa: "flex", flexDirection: "column" }}>
            <Typography variant="h5" fontWeight={700}>
              Francisco Vieira
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "#00ffaa" }}>
              CEO & Founder
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>
            Inovação, visão e compromisso.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1", lineHeight: 1.8 }}>
            Olá! Sou o Francisco, fundador da Etronic Digitals. Desde muito cedo
            fui movido por tecnologia, inovação e o desafio constante de criar
            soluções que realmente transformam negócios. Ao longo dos anos,
            ganhei experiência em grandes empresas e startups nacionais e
            internacionais, em derivadas áreas, como a banca, automovél,
            educação, entre outras.
            <br />
            <br />
            A nossa missão é simples: ajudar empresas a crescerem com soluções
            digitais robustas, visualmente impressionantes e altamente eficazes.
            Confiança, proximidade e profissionalismo são os pilares que guiam
            cada projeto.
            <br />
            <br />
            Vamos transformar a tua ideia numa realidade digital?
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CEOSection;
