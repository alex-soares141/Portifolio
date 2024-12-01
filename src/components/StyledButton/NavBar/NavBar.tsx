import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import { Link } from "react-scroll";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-evenly",
    borderBottom: "1px solid #ccc",
  }));

  const StyledMenuItem = styled(MenuItem)(() => ({
    transition: "color 0.3s, transform 0.3s",
    "&:hover": {
      color: "#8cb0b5", // Cor do texto ao passar o mouse
      transform: "scale(1.1)", // Leve aumento de tamanho
    },
  }));

  const StyledLink = styled(Link)(() => ({
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      textDecoration: "underline", // Sublinha o texto ao passar o mouse
    },
  }));

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <StyledMenuItem>
            <StyledLink to="about" smooth={true} duration={1000}>
              Sobre Mim
            </StyledLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledLink to="Projetos" smooth={true} duration={2000}>
              Projetos
            </StyledLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledLink to="Habilidades" smooth={true} duration={2000}>
              Habilidades
            </StyledLink>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledLink to="Experiencia" smooth={true} duration={2000}>
              Experiência
            </StyledLink>
          </StyledMenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
