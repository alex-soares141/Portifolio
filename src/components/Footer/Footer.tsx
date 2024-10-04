import { Container, styled, Typography } from "@mui/material";
import Whatsapp from '../../assets/Whatsapp.png';
import Instagram from '../../assets/Instagram.png'
import GitHub from '../../assets/Github.png'
import Linkedin from '../../assets/Linkedin.png'


const StyledFooter = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  height: "30%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
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
        <h5>Me acompanhe nas redes sociais</h5>
      </Typography>

      <Container maxWidth="md" >
        <StyledIcons>
          <img src={Whatsapp} alt="" />
          <img src={Instagram} alt="" />

          <img src={GitHub} alt="" />
          <img src={Linkedin} alt="" />

        </StyledIcons>




      </Container>

    </StyledFooter >

  );
};

export default Footer;

