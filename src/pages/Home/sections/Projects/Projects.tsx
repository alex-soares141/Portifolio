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
    <StyledProjects id="ProjectsStyledProjects">
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
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica.
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
                    Evento Ebac
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica.
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
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={4}> {/* Ajuste para colunas em breakpoints médios */}
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Pessoal}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Pagina de estudos
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica.
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
                  image={MX}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mx Store
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica.
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
                  image={Efood}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    E-food
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica.
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
