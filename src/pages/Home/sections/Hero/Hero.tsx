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
    height: "100vh",
    display: "flex",
    alignItems: "center",

    paddingTop: "100px",
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
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
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
              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => console.log("dowload")} >
                    <DownloadForOfflineIcon />
                    <Typography>
                      <a
                        href="https://drive.google.com/file/d/1XUevrNSU2_JTRTgPIR_mDvHrU08MuqeT/view?usp=drive_link"
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
                        href="https://wa.me/5533988997674" // Link para abrir no WhatsApp
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
