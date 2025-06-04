// src/pages/ServicesPage.jsx
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { Code, PhoneIphone, Settings } from "@mui/icons-material";
import { motion } from "framer-motion";
import { CTASection } from "../home/shards/ctaSection";

const services = [
  {
    icon: <Code fontSize="large" sx={{ color: "#00ffaa" }} />,
    title: "Desenvolvimento Web",
    description:
      "Criamos websites modernos, landing pages, sistemas personalizados e aplicações web progressivas (PWA). Tudo com foco em performance, UX e presença digital de alto impacto.",
  },
  {
    icon: <PhoneIphone fontSize="large" sx={{ color: "#00ffaa" }} />,
    title: "Gestão de Redes & SEO",
    description:
      "Impulsionamos a sua marca com estratégias de redes sociais, anúncios (Meta Ads, Google) e SEO técnico para maximizar visibilidade e atrair mais clientes organicamente.",
  },
  {
    icon: <Settings fontSize="large" sx={{ color: "#00ffaa" }} />,
    title: "Transformação Digital",
    description:
      "Ajudamos empresas a evoluírem com automações, ferramentas personalizadas e metodologias ágeis como SCRUM. Reduza custos, melhore processos e inove com tecnologia.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ServicesPage = () => {
  return (
    <Box>
      <Box sx={{ position: "relative", height: "350px", overflow: "hidden" }}>
        <img
          src="https://mf7n7up5egdpkbzf.public.blob.vercel-storage.com/pexels-divinetechygirl-1181675-4oQJdIgcPYLg7zIk24q4ajfgPLFZHI.jpg"
          alt="Imagem de fundo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Overlay suave */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))",
            zIndex: 1,
          }}
        />
      </Box>

      <Box sx={{ backgroundColor: "#0d0d0d", color: "#fff", py: 6, px: 4 }}>
        <Typography variant="h3" align="center" fontWeight="bold" mb={4}>
          Os nossos <span style={{ color: "#00ffaa" }}>Serviços</span>
        </Typography>

        <Typography
          variant="h6"
          align="center"
          mb={6}
          sx={{ maxWidth: 800, mx: "auto", color: "#aaa" }}
        >
          Soluções digitais completas para negócios ambiciosos. Entregamos
          inovação com qualidade, rapidez e uma abordagem orientada a
          resultados.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariant}
              >
                <Card
                  sx={{
                    backgroundColor: "#1a1a1a",
                    borderRadius: "20px",
                    p: 3,
                    height: "100%",
                    boxShadow: "0 0 20px rgba(0,255,170,0.1)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 0 30px rgba(0,255,170,0.3)",
                    },
                  }}
                >
                  <CardContent>
                    <Box mb={2}>{service.icon}</Box>
                    <Typography
                      color="white"
                      variant="h6"
                      fontWeight={600}
                      mb={1}
                    >
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="#ccc">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <CTASection />
    </Box>
  );
};

export default ServicesPage;
