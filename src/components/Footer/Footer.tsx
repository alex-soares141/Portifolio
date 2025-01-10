import { Container, styled, Typography } from "@mui/material";
import Whatsapp from '../../assets/Whatsapp.png';
import Instagram from '../../assets/Instagram.png';
import GitHub from '../../assets/Github.png';
import Linkedin from '../../assets/Linkedin.png';

const StyledFooter = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  height: "30%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  paddingBottom: "8px",
  border: "1px solid #ccc",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    paddingTop: "0px",
  },
}));

const StyledIcons = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  height: "30%",
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    paddingTop: "0px",
  },
}));

// Estilização do ícone com efeito de hover
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, no-empty-pattern
const IconLink = styled("a")(({ }) => ({
  display: "inline-block",
  transition: "transform 0.3s ease, opacity 0.3s ease", // Transições suaves
  "&:hover": {
    transform: "scale(1.1)", // Aumenta o tamanho do ícone
    opacity: 0.8, // Aplica um efeito de transparência ao passar o mouse
  },
}));

const Footer = () => {
  return (
    <StyledFooter id="Footer">
      <Typography color="primary.contrastText" variant="h5" textAlign="center" fontSize={32}>
        <h4>Conecte-se comigo nas redes sociais</h4>
      </Typography>

      <Container maxWidth="md">
        <StyledIcons>
          <IconLink href="https://wa.me/5533988997674" target="_blank" rel="noopener noreferrer">
            <img src={Whatsapp} alt="whatsapp" />
          </IconLink>
          <IconLink
            href="https://www.instagram.com/alex_soares_oliveira/"
            style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </IconLink>
          <IconLink
            href="https://github.com/alex-soares141"
            style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="github" />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/alex-soares-de-oliveira-669885308/"
            style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </IconLink>
        </StyledIcons>
      </Container>

      <Typography color="primary.contrastText" variant="body2" textAlign="center" fontSize={14} marginTop="20px">
        &copy; Alex Soares de Oliveira. Todos os direitos reservados 2024.
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
