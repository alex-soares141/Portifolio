import { styled, keyframes } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';

import HTML from '../../../assets/icons/html-1.svg';
import Css from '../../../assets/icons/css-3.svg';
import JavaScript from '../../../assets/icons/javascript-1.svg';
import TypeScript from '../../../assets/icons/typescript.svg';
import Jquery from '../../../assets/icons/jquery.svg';
import Bootstrap from '../../../assets/icons/bootstrap-5-1.svg';
import Redux from '../../../assets/icons/redux.svg';
import Vue from '../../../assets/icons/vue-9.svg';
import React from '../../../assets/icons/react-2.svg';
import Sass from '../../../assets/icons/sass-1.svg';
import Less from '../../../assets/icons/less.svg';
import Gulp from '../../../assets/icons/gulp.svg';
import Grunt from '../../../assets/icons/grunt-1.svg';
import Material from '../../../assets/icons/material-ui-1.svg';
import Cypress from '../../../assets/icons/cypress-1.svg';
import Vercel from '../../../assets/icons/vercel.svg';

// Animação para piscar
const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity:1;
  }
`;

const StyledHabilidades = styled('div')(({ theme }) => ({
  textAlign: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '20px',
  paddingBottom: '16px',
  backgroundColor: theme.palette.grey[300],
}));

const IconContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '17px',
  margin: '18px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light,
  width: '90px',
  height: '90px',
  transition: 'transform 0.3s',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
  animation: `${blinkAnimation} 3s infinite ease-in-out`, // Adiciona a animação de piscar

  '&:hover': {
    transform: 'scale(1.2)',
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
  },

  '& img': {
    width: '100%',
    height: '100%',
    padding: '17px',
    objectFit: 'contain',
  },
}));

export default function Habilidades() {
  const icons = [
    HTML,
    Css,
    JavaScript,
    TypeScript,
    Jquery,
    Bootstrap,
    Redux,
    Vue,
    React,
    Sass,
    Less,
    Gulp,
    Grunt,
    Material,
    Cypress,
    Vercel,
  ];

  return (
    <StyledHabilidades id="Habilidades">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom>
          Habilidades
        </Typography>

        <CardContent>
          <Grid container spacing={5} justifyContent="center">
            {icons.map((icon, index) => (
              <Grid item key={index}>
                <IconContainer>
                  <img src={icon} alt={`Icon ${index + 1}`} />
                </IconContainer>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Container>
    </StyledHabilidades>
  );
}
