import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundMedia = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const BackgroundVideo = styled.video<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const FallbackImage = styled.img<{ isVisible: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const CTAButton = styled(motion.a)`
  background-color: #00ffaa;
  color: #000;
  padding: 15px 30px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #00cc88;
  }
`;

const HeroSection: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVideoLoaded(true);
    }, 5000);
  }, []);

  return (
    <HeroContainer>
      <BackgroundMedia>
        <BackgroundVideo
          isVisible={videoLoaded}
          autoPlay
          muted
          loop
          playsInline
          preload="none" // ou "none" para não pré-carregar
          poster="/pexels-andres-figueroa-3326883-32046545.png"
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source src="/13650374_3840_2160_30fps.mp4" type="video/mp4" />
        </BackgroundVideo>
        <FallbackImage
          isVisible={!videoLoaded}
          src="/pexels-andres-figueroa-3326883-32046545.jpg"
          alt="Imagem de fundo"
        />
      </BackgroundMedia>
      <Overlay>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transformamos Ideias em Soluções Digitais
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Desenvolvimento de websites e gestão de redes sociais para impulsionar
          o seu negócio.
        </Subtitle>
        <CTAButton
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=%2B351932141109&text&type=phone_number&app_absent=0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Fale Connosco
        </CTAButton>
      </Overlay>
    </HeroContainer>
  );
};

export default HeroSection;
