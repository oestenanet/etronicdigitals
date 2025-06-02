// src/components/ServicesSection.jsx
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Code, PhoneIphone, Settings } from "@mui/icons-material";

const services = [
  {
    icon: <Code fontSize="large" />,
    title: "Desenvolvimento Web",
    description:
      "Criação de sites, landing pages, apps, automatizações, 100% responsivo para que funcione em todos os dispositivos.",
  },
  {
    icon: <PhoneIphone fontSize="large" />,
    title: "Apps Móveis",
    description:
      "Criação e gestão de redes sociais, anúncios meta e google seo.",
  },
  {
    icon: <Settings fontSize="large" />,
    title: "Transformação Digital",
    description:
      "Modernize e otimize processos na sua empresa, especializados em metodologias SCRUM, para que impulsione a produtividade da sua empresa.",
  },
];

export const ServicesSection = () => (
  <Box
    sx={{
      py: 10,
      px: 4,
      backgroundColor: "#fff",
      gap: "32px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
      Nossos <span style={{ color: "#00ffaa" }}>Serviços</span>
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {services.map((service, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: "20px",
                backgroundColor: "#fff",
                border: "2px solid transparent",
                transition: "all 0.3s ease-in-out",
                boxShadow: "0 0 0 rgba(0,255,170,0.1)",
                "&:hover": {
                  borderColor: "#00ffaa",
                  boxShadow: "0 0 30px rgba(0,255,170,0.3)",
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Box sx={{ color: "#00ffaa", mb: 2 }}>{service.icon}</Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {service.title}
              </Typography>
              <Typography color="text.secondary">
                {service.description}
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);
