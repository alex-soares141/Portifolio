import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import Restaurante from "../../../../assets/Rest.png";
import Evento from "../../../../assets/Evento.png";
import Disney from "../../../../assets/Disney.png";
import Pessoal from "../../../../assets/Pessoal.png";
import MX from "../../../../assets/Mx.png";
import Efood from "../../../../assets/Efood.png";

const StyledProjects = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  paddingTop: "0px",

  backgroundColor: theme.palette.grey[200],
}));

export default function ActionAreaCard() {
  return (
    <StyledProjects id="Projetos">
      <Container maxWidth="md">
        <Typography
          color="black"
          variant="h2"
          textAlign="center"
          gutterBottom

        >
          Projetos
        </Typography>


        <Grid container spacing={2} paddingBottom="30px" justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Restaurante}
                  alt="Restaurante M & V"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Restaurante M & V
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Página criada como projeto pessoal, para praticar o uso de bootstrap 5, o intuito foi criar uma pagina estatica
                    dedicado aos meus pais, por esse motivo o nome M&V (Márcio e Vanilda).
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Evento}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Evento Tech
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Ebac Tech, foi a criação de uma pagina destinada a um Evento da instituição,
                    utilizando JavaScript para a contagem regressiva, a biblioteca Animate On Scroll Library para animações no Scroll.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Disney}
                  alt="green iguana "
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Clone Disney
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Nesse projeto o intuito foi realizar a criação de uma pagina bem semelhante a Disney-Plus, onde foi utilizando a Biblioteca,
                    Gulp para a pratica de minificações de imagens e scripts.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, paddingBottom: 13, }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Pessoal}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Consumo de API
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Nesse projeto eu estava praticando o consumo de api e utilização do Less, para mapeamento de estilos,
                    uma pagina estatica mas com redirecionamento de links.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, paddingBottom: 8, }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={MX}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mx Store
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    A Mx Store é uma pagina de exibição de equipamentos para motocross, no qual eu gosto bastante e fiz como projeto pessoal,
                    Nessa pagina pude utilizar mascaras Jquery, pude conhecer novos recursos do Bootstrap, como por exemplo nav-pills e scroll spy.

                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, paddingBottom: 0, }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Efood}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    E-food
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Teste final Ebac, um e-commerce como projeto final do curso de Engenheiro Front-End da EBAC. O objetivo foi aplicar as melhores práticas de desenvolvimento web,
                    criando uma aplicação moderna, responsiva com as
                    tecnologias React.js com TypeScript, Styled-components, Hooks do React, Redux para gerenciamento de estado e cypress para teste .
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </StyledProjects >
  );
}
