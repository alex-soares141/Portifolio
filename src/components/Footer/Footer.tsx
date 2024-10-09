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

const Footer = () => {
  return (
    <StyledFooter id="Footer">
      <Typography
        color="primary.contrastText"
        variant="h5"
        textAlign="center"
        fontSize={32}
      >
        <h4>Conecte-se comigo nas redes sociais</h4>
      </Typography>

      <Container maxWidth="md">
        <StyledIcons>
          <a href="https://wa.me/5533988997674" target="_blank" rel="noopener noreferrer">
            <img src={Whatsapp} alt="whatsapp" />
          </a>
          <a
            href="https://www.instagram.com/alex_dev_frontend/"
            style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            href="https://github.com/Lostleleco"
            style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="github" />
          </a>
          <a
            href="https://www.instagram.com/alex_soares_oliveira/"
            style={{ textDecoration: 'none', color: 'inherit' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
        </StyledIcons>
      </Container>

      <Typography
        color="primary.contrastText"
        variant="body2"
        textAlign="center"
        fontSize={14}
        marginTop="20px"
      >
        &copy; Alex Soares de Oliveira. Todos os direitos reservados 2024.
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
