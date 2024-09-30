import { Container, styled, Typography } from "@mui/material";



const StyledFooter = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  height: "10vh",
  display: "flex",
  padding: "0px",
  color: theme.palette.primary.contrastText,
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    paddingTop: "0px",

  },
}));

const Footer = () => {
  return (

    <StyledFooter id="Footer">
      <Container maxWidth="md">

        <Typography
          color="Primary.contrastText"
          variant="h2"
          textAlign="center"
        >
          <p>footer em andamento</p>
        </Typography>



      </Container>

    </StyledFooter>

  );
};

export default Footer;

