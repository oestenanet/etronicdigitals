import {
  Box,
  Typography,
  Container,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0d0d0d",
        color: "#aaa",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#fff", fontWeight: "bold", mb: 1 }}
          >
            Etronic Digitals
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: 500, mb: 3 }}>
            Criamos soluções digitais modernas para marcas visionárias. De
            websites a sistemas, transformamos ideias em inovação.
          </Typography>

          {/* Social Icons */}
          <Stack
            direction="row"
            spacing={2}
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <IconButton
              href="https://www.instagram.com/etronicdigitals/"
              target="_blank"
              sx={{ color: "#aaa", "&:hover": { color: "#00ffaa" } }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=%2B351932141109&text&type=phone_number&app_absent=0"
              sx={{ color: "#aaa", "&:hover": { color: "#00ffaa" } }}
            >
              <Typography
                variant="body2"
                align="center"
                sx={{ fontSize: "0.875rem" }}
              >
                +351 932 141 109
              </Typography>
            </IconButton>
            <IconButton sx={{ color: "#aaa", "&:hover": { color: "#00ffaa" } }}>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontSize: "0.875rem" }}
              >
                franciscovieirawork@hotmail.com
              </Typography>
            </IconButton>
          </Stack>
        </Box>

        {/* Divider */}
        <Divider sx={{ backgroundColor: "#333", my: 4 }} />

        {/* Bottom Section */}
        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: "0.875rem" }}
        >
          © {new Date().getFullYear()} Etronic Digitals. Todos os direitos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
