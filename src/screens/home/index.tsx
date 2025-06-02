// src/pages/Home.jsx
import { Box } from "@mui/material";
import HeroSection from "../../components/heroSection";
import { ServicesSection } from "./shards/servicesSections";
import { CTASection } from "./shards/ctaSection";
import CEOSection from "./shards/ceoSection";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <CEOSection />
      <CTASection />
    </Box>
  );
};

export default Home;
