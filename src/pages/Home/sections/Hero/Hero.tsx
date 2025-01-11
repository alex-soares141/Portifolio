import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/20240928_134217.jpg";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "130vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "100px",
    [theme.breakpoints.up("md")]: {
      paddingTop: "0px",
    },
  }));

  const StyledImg = styled("img")(() => ({
    width: "55%",
    borderRadius: "100%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero id="home">
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} lg={5}>
              <Box position="relative">
                <Box position="absolute" width={"100%"} top={-100} right={-1}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />

                </Box>
              </Box>

            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pt={3}
              >
                <span>Alex Soares</span>
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
                pb={3}
              >
                <span>I&apos;m a Front End Developer</span>
              </Typography>

              <Typography
                color="primary.contrastText"
                variant="h5"
                textAlign="center"
                pb={5}
                fontStyle="italic"
              >
                Desenvolvendo soluções inovadoras que transformam ideias em experiências digitais incríveis.
              </Typography>

              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("dowload")} >
                    <DownloadForOfflineIcon />
                    <Typography>
                      <a
                        href="https://docs.google.com/document/d/1wFoGn6UJCor93-xZHqXGEaR5DJncJHp2/edit"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download CV
                      </a>
                    </Typography>
                  </StyledButton>
                </Grid>

                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("Contact")}>
                    <WhatsAppIcon />
                    <Typography>
                      <a
                        href="https://wa.me/5533988997674"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
