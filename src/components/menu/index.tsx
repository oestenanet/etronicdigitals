import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", id: "" },
  { name: "Serviços", id: "services" },
  { name: "Portfólio", id: "portfolio" },
  { name: "Contato", id: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Slide in direction="down">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "#fff" : "#0d0d0d",
          boxShadow: scrolled ? 1 : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Typography
            component={Link}
            to={"/"}
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: scrolled ? "#000" : "#fff",
              transition: "color 0.3s ease",
              textDecoration: "none",
            }}
          >
            Etronic Digitals
          </Typography>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  component={Link}
                  to={`/${item.id}`}
                  sx={{
                    color: scrolled ? "#000" : "#fff",
                    fontWeight: 500,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#00ffaa",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          {/* Right Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {!isMobile && (
              <Button
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=%2B351932141109&text&type=phone_number&app_absent=0"
                variant="contained"
                sx={{
                  backgroundColor: "#00ffaa",
                  color: "#000",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#00dd99",
                  },
                }}
              >
                Vamos falar
              </Button>
            )}

            {isMobile && (
              <>
                <IconButton
                  onClick={toggleDrawer(true)}
                  sx={{ color: scrolled ? "#000" : "#fff" }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{ width: 250, backgroundColor: "#0d0d0d" }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                  >
                    <List>
                      {navItems.map((text) => (
                        <ListItem
                          key={text.id}
                          component={Link}
                          to={`/${text.id}`}
                          style={{ color: "#fff" }}
                        >
                          <ListItemText primary={text.name} />
                        </ListItem>
                      ))}
                      <ListItem>
                        <Button
                          target="_blank"
                          href="https://api.whatsapp.com/send/?phone=%2B351932141109&text&type=phone_number&app_absent=0"
                          fullWidth
                          variant="contained"
                          sx={{
                            mt: 2,
                            backgroundColor: "#00ffaa",
                            color: "#000",
                            fontWeight: "bold",
                            "&:hover": {
                              backgroundColor: "#00dd99",
                            },
                          }}
                        >
                          Vamos falar
                        </Button>
                      </ListItem>
                    </List>
                  </Box>
                </Drawer>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Navbar;

//comment
