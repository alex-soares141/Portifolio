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
  paddingTop: "32px",
  paddingBottom: "32px",
  backgroundColor: theme.palette.primary.main,
}));


const StyledButton = styled("button")(() => ({
  padding: "10px 20px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  margin: "10px 0",
  textDecoration: "none",
  '&:hover': {
    backgroundColor: "#4cb92b",
  },
}));



const StyledCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: 'space-between',
  height: '100%',
  width: '90%',
  marginLeft: "10px"
}));

export default function ActionAreaCard() {
  return (
    <StyledProjects id="Projetos">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          color="primary.contrastText"
        >
          Projetos
        </Typography>

        <Grid container spacing={4} paddingBottom="30px" justifyContent="center">
          <Grid item xs={12} md={4}>
            <StyledCard sx={{ maxWidth: 390 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
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
              <StyledButton>
                <a
                  href="https://m-v.vercel.app/"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visite o site
                </a>
              </StyledButton>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard sx={{ maxWidth: 390 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={Evento}
                  alt="Evento Tech"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Evento Tech
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Ebac Tech, foi a criação de uma página destinada a um Evento da instituição,
                    utilizando JavaScript para a contagem regressiva, a biblioteca Animate On Scroll Library para animações no Scroll.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <StyledButton>
                <a
                  href="https://ebac-tech-alex.vercel.app/"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visite o site
                </a>
              </StyledButton>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={Disney}
                  alt="Clone Disney"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Clone Disney
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Nesse projeto o intuito foi realizar a criação de uma página bem semelhante à Disney-Plus, utilizando a Biblioteca
                    Gulp para a prática de minificações de imagens e scripts.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <StyledButton>
                <a
                  href="https://alex-clone-disneyplus.vercel.app/"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visite o site
                </a>
              </StyledButton>
            </StyledCard>
          </Grid>
        </Grid>


        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}>
            <StyledCard sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={Pessoal}
                  alt="Consumo de API"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lista de contatos
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Esse pequeno projeto foi para treinar a logica de programação, uma forma de adicionar e
                    remover contatos quando necessario.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <StyledButton>
                <a
                  href="https://alex-contact-list-react-redux.vercel.app/"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visite o site
                </a>
              </StyledButton>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={MX}
                  alt="Mx Store"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mx Store
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    A Mx Store é uma página de exibição de equipamentos para motocross, onde eu utilizei máscaras Jquery
                    e explorei novos recursos do Bootstrap, como nav-pills e scroll spy.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <StyledButton>
                <a
                  href="https://mx-store.vercel.app/"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visite o site
                </a>
              </StyledButton>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="190"
                  image={Efood}
                  alt="E-food"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    E-food
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Teste final da EBAC, um e-commerce como projeto final do curso de Engenheiro Front-End da EBAC.
                    O objetivo foi aplicar as melhores práticas de desenvolvimento web, criando uma aplicação moderna e responsiva.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <StyledButton>
                <a
                  href="https://e-food-one.vercel.app/"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visite o site
                </a>
              </StyledButton>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </StyledProjects>
  );
}
