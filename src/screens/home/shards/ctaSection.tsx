// src/components/CTASection.jsx
import { Box, Typography, Button } from "@mui/material";

export const CTASection = () => (
  <Box
    sx={{
      py: 10,
      px: 4,
      background: "linear-gradient(to right, #00ffaa, #0066ff)",
      color: "#000",
      textAlign: "center",
    }}
  >
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Pronto para elevar o teu negócio?
    </Typography>
    <Typography variant="body1" mb={4}>
      Descubra como as nossas soluções tecnológicas podem impulsionar os seus
      resultados.
    </Typography>
    <Button
      variant="contained"
      size="large"
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=%2B351932141109&text&type=phone_number&app_absent=0"
      sx={{
        backgroundColor: "#000",
        color: "#00ffaa",
        "&:hover": { backgroundColor: "#111" },
      }}
    >
      Fala connosco
    </Button>
  </Box>
);
