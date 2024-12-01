import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';


const StyledExperiencia = styled("div")(({ theme }) => ({
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
    <StyledExperiencia id="Experiencia">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
          color="primary.contrastText"
        >
          Experiências
        </Typography>

        <Grid container spacing={4} paddingBottom="30px" justifyContent="center">
          <Grid item xs={12} md={4}>
            <StyledCard sx={{ maxWidth: 390 }}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Facil Sistemas Ltda
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Responsável por implantação do software, treinamento de clientes presencialmente e por acesso remoto
                    | atendimento de chamados, orientação e auxílio aos clientes em suas demandas |
                    análise de possíveis bugs, comunicando entre a equipe interna para posteriormente informar para o setor de desenvolvimento
                    e aplicar as correções no software | Firebird 2.5 na utilização do ibexpert e consultas SQL para tratar bugs e erros no banco de dados.
                  </Typography>
                </CardContent>
              </CardActionArea>

            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard sx={{ maxWidth: 390 }}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Desenvolvedor Front End Júnior
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Faço parte do time de desenvolvedores da Front Fusion, como voluntario em um projeto de desenvolvimento de uma Landing Page. Minhas responsabilidades são:
                    - Desenvolver paginas dinamicas e responsivas.
                    - Colaborar com equipe multidiciplinar.
                    - Participar de rituais Scrum- participar de daily meetings, sprints, organização e contabilização de horas de projeto, utilização do click up para organizar demandas usando Kanban.
                    - Desenvolver projetos utilizando React, TypeScript , Tailwind Css , Vite, Axios, React Hook Form ou Yup.
                  </Typography>
                </CardContent>
              </CardActionArea>

            </StyledCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <StyledCard sx={{ maxWidth: 345 }}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Desenvolvedor de front-end Freelancer
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Atuo como Desenvolvedor Front-End, atendendo clientes na plataforma WorxBase. Minha principal responsabilidade é criar interfaces modernas, interativas e responsivas que proporcionem uma experiência de usuário eficiente e intuitiva. Utilizo tecnologias e frameworks de ponta, incluindo WordPress, para entregar soluções personalizadas e de alta qualidade.
                  </Typography>
                </CardContent>
              </CardActionArea>

            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </StyledExperiencia>
  );
}
