import { Container, styled, Typography } from "@mui/material";



const StyledFooter = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  height: "20vh",
  display: "flex",
  padding: "0px",

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
          color="secondary.contrastText"
          variant="h2"
          textAlign="center"
        >
          Footer
        </Typography>



      </Container>

    </StyledFooter>

  );
};

export default Footer;

