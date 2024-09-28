import { Button, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from '../../../../assets/Perfil.jpg'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh"
  }))
  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }))
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">Alex Soares </Typography>
              <Typography color="primary" variant="h2" textAlign="center">Front End Developer</Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <DownloadForOfflineIcon />
                    Dowload CV
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <EmailIcon />
                    Contact me
                  </Button>
                </Grid>

              </Grid>


            </Grid>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>
        </Container>


      </StyledHero>

    </>
  );
}

export default Hero;
