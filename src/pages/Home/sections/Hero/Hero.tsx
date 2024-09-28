/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from '../../../../assets/20240928_090213.jpg'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center"
  }))
  const StyledImg = styled("img")(() => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }))
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} alt="Avatar" />
              </Box>

            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center" pt={3}>Alex Soares </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center"> I'm Front End Developer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>

                    <DownloadForOfflineIcon />
                    <Typography>
                      Dowload CV
                    </Typography>

                  </StyledButton >
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton>
                    <EmailIcon />
                    <Typography>
                      Contact me
                    </Typography>
                  </StyledButton>
                </Grid>

              </Grid>


            </Grid>
            <Grid item xs={8}>

            </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>
        </Container >


      </StyledHero >

    </>
  );
}

export default Hero;
