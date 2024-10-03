import { Box, Container, styled, Typography } from "@mui/material";

const StyledAbout = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  paddingTop: "0px",
  backgroundColor: theme.palette.grey[300],
}));

const About = () => {
  return (
    <StyledAbout id="about">
      <Container maxWidth="md">
        <Typography
          color="Primary.contrastText"
          variant="h2"
          textAlign="center"
          pb={8}
        >
          Sobre mim
        </Typography>
        <Typography textAlign="initial" fontSize={19}>
          <Box>
            Meu nome é Alex Soares de Oliveira, tenho 29 anos e sou natural de Guanhães-MG, onde passei boa parte da minha vida trabalhando como
            vendedor em lojas de materiais de construção. Em 2021, tive a oportunidade de ingressar no mercado de TI, um campo que sempre despertou
            minha curiosidade. Desde então, percebi que estava trilhando o caminho certo para minha carreira. Em 2022, iniciei a faculdade
            de Análise e Desenvolvimento de Sistemas e obtive minha graduação. Além disso, finalizei o curso profissionalizante de Engenheiro
            Front-End pela EBAC. Porém, minha jornada não para por aqui, continuo em constante busca por aprendizado e estou à
            procura de novas oportunidades no mercado.
          </Box>
        </Typography>
      </Container>
    </StyledAbout>
  );
};

export default About;
