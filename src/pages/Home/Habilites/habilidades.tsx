import { Container, styled, Typography } from "@mui/material";
import CircularIconAnimation from "../../../components/CircularIconAnimation/CircularIconAnimation";


const StyledHabilidades = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  height: "80vh",
  display: "flex",
  padding: "0px",

  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: theme.palette.grey[300],
  [theme.breakpoints.up("md")]: {
    paddingTop: "0px",

  },
}));

const Habilidades = () => {
  return (

    <StyledHabilidades id="Habilidades">
      <Container maxWidth="md">

        <Typography
          color="Primary.contrastText"
          variant="h2"
          textAlign="center"
        >
          Habilidades
        </Typography>



      </Container>
      <CircularIconAnimation />
    </StyledHabilidades>

  );
};

export default Habilidades;

