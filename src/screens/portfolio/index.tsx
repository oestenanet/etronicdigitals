// src/pages/PortfolioPage.jsx
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Apps na área da banca",
    description:
      "Desenvolvimento de aplicações web, numa grande empresa Portuguesa na área da banca (tendo obrigatoriedade na descrição), é onde atuamos mais no momento, na criação de novas funcionalidades e correção de bugs em aplicações móveis.",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fullWidth: true,
  },
  {
    title: "BMW Configurator",
    description:
      "Participação no projeto Alemão BMW, onde participamos ativamente no desenvolvimento de novas features no seu configurador automóvel e correção de bugs.",
    image:
      "https://www.bmw.pt/content/dam/bmw/common/images/logo-icons/BMW/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG",
  },
  {
    title: "Doce Algodão",
    description:
      "Gestão das redes sociais e marketing (publicidade meta para Instagram e Facebook) para uma loja de roupa. Criação da imagem da loja (Logotipo, branding) e do respetivo website.",
    image: "/464476786_565466949293360_1150025095639299327_n.jpeg",
  },
  //   {
  //     title: "Superbryte",
  //     description:
  //       "Criação de uma aplicação web, onde qualquer pessoa pode dar cursos online. Projeto iniciado por uma startup alemã.",
  //     image:
  //       "https://static.wixstatic.com/media/788e63_b78166479bad40f08a271e469d88dd90~mv2.png/v1/fill/w_158,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2033590.png",
  //   },
  {
    title: "Airtrain",
    description:
      "Desenvolvimento de toda a arquitectura e frontend de uma aplicação Web e Mobile na área do e-learning. Integração de funcionalidades com terceiros, como a google, whereby, zoom, plataformas de gestão, etc.",
    image:
      "https://static.wixstatic.com/media/788e63_b78166479bad40f08a271e469d88dd90~mv2.png/v1/fill/w_158,h_32,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2033590.png",
  },
  {
    title: "protendas.pt",
    description:
      "Desenvolvimento do website de uma organizadora de eventos. Um site informativo onde mostra todos os seus serviços, com uma secção de contactos integrado com a plataforma de emails do cliente.",
    image:
      "https://protendas.pt/static/media/logoReload.86737e399c8da7fc30da.png",
    whiteLogo: true,
  },
  {
    title: "ATB - Associação Tempos Brilhantes",
    description:
      "Participação no desenvolvimento de programas educativos de qualidade e acessíveis para estudantes de todas as idades!",
    image: "https://atbrilhantes.pt/wp-content/uploads/2019/07/logomenu.png",
    whiteLogo: true,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: any) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const isTransparent = (url: string) =>
  url.includes("logo-icons/BMW") ||
  url.includes("wixstatic.com") ||
  url.includes("464476786_565466949293360_1150025095639299327_n");

const PortfolioPage = () => {
  return (
    <Box sx={{ backgroundColor: "#0d0d0d", color: "#fff", py: 10, px: 4 }}>
      <Typography variant="h3" align="center" fontWeight="bold" mb={4}>
        Portfólio <span style={{ color: "#00ffaa" }}>Digital</span>
      </Typography>
      <Typography
        variant="h6"
        align="center"
        mb={6}
        sx={{ maxWidth: 800, mx: "auto", color: "#aaa" }}
      >
        Projetos reais que ajudaram marcas a crescer digitalmente. Do conceito à
        execução, entregamos qualidade e inovação.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, i) => (
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
                  boxShadow: "0 0 20px rgba(0,255,170,0.1)",
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 0 30px rgba(0,255,170,0.3)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 180,
                    backgroundColor: isTransparent(project.image)
                      ? "#fff"
                      : "transparent",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={
                      project.fullWidth
                        ? {
                            height: 180,
                          }
                        : {
                            maxHeight: 100,
                            maxWidth: "80%",
                            objectFit: "contain",
                          }
                    }
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    mb={1}
                    color="#00ffaa"
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="#ccc">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioPage;
