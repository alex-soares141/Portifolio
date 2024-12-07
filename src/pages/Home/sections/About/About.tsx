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
            Meu nome é Alex Soares de Oliveira, tenho 29 anos e sou natural de Guanhães-MG, onde iniciei minha trajetória profissional como vendedor em lojas de materiais de construção. Sempre tive curiosidade pela área de tecnologia, e em 2021 tive a oportunidade de dar um grande passo em direção a esse mercado, ingressando na área de TI. Desde então, percebi que havia encontrado minha verdadeira vocação.

            Em 2022, comecei a faculdade de Análise e Desenvolvimento de Sistemas, concluindo minha graduação com sucesso. Além disso, finalizei o curso profissionalizante Desenvolvedor Front-End pela EBAC, onde desenvolvi uma base sólida em tecnologias modernas.

            Atualmente, trabalho como desenvolvedor autônomo na Worxbase e como voluntário na Fusion Frontend, onde aplico e aprimoro minhas habilidades utilizando as ferramentas mais atuais do mercado. Essas experiências têm sido essenciais para consolidar minha carreira e expandir meus conhecimentos na área de desenvolvimento.
          </Box>
        </Typography>
      </Container>
    </StyledAbout>
  );
};

export default About;
