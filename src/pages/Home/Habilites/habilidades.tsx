import { styled, keyframes } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
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

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
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
  margin: '10px',
  padding: '10px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light,
  width: '60px',
  height: '60px',
  transition: 'transform 0.3s',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
  animation: `${fadeInScale} 0.8s ease-in-out`,

  '&:hover': {
    transform: 'scale(1.2)',
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
  },

  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const StyledCard = styled(Card)(({ }) => ({
  maxWidth: 600,
  margin: '20px auto',
  padding: '20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
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
  ];

  return (
    <StyledHabilidades id="Habilidades">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom>
          Habilidades
        </Typography>

        <StyledCard>
          <CardContent>
            <Grid container spacing={2} justifyContent="center">
              {icons.map((icon, index) => (
                <Grid item key={index}>
                  <IconContainer>
                    <img src={icon} alt="" />
                  </IconContainer>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </StyledCard>
      </Container>
    </StyledHabilidades>
  );
}
