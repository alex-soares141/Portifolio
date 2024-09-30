import React from 'react';
import { Box, SvgIcon, styled } from '@mui/material';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CodeIcon from '@mui/icons-material/Code';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import PaletteIcon from '@mui/icons-material/Palette';
import GradientIcon from '@mui/icons-material/Gradient';
import BuildIcon from '@mui/icons-material/Build';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import BugReportIcon from '@mui/icons-material/BugReport';



const Container = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '800px',
  height: '600px',
  margin: '0 auto',
  animation: 'spin 10s linear infinite',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '500px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '300px',
    height: '300px',
  },
}));


const IconWrapper = styled(Box)<{ angle: number }>(({ angle, theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '40px',
  height: '40px',
  transform: `rotate(${angle}deg) translate(180px) rotate(-${angle}deg)`,
  transition: 'transform 0.1s ease-in-out',

  '&:hover': {
    transform: `rotate(${angle}deg) translate(180px) rotate(-${angle}deg) scale(1.2)`,
  },

  [theme.breakpoints.down('sm')]: {
    transform: `rotate(${angle}deg) translate(110px) rotate(-${angle}deg)`,
  },
}));


const icons = [
  { Icon: HtmlIcon, name: 'HTML', color: '#E34F26' },
  { Icon: CssIcon, name: 'CSS', color: '#1572B6' },
  { Icon: JavascriptIcon, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: CodeIcon, name: 'React', color: '#61DAFB' },
  { Icon: CodeIcon, name: 'TypeScript', color: '#3178C6' },
  { Icon: CodeIcon, name: 'Vue.js', color: '#42b883' },
  { Icon: ViewQuiltIcon, name: 'Bootstrap', color: '#563d7c' },
  { Icon: SettingsEthernetIcon, name: 'jQuery', color: '#0769AD' },
  { Icon: PaletteIcon, name: 'Sass', color: '#CC6699' },
  { Icon: GradientIcon, name: 'Less', color: '#1D365D' },
  { Icon: BuildIcon, name: 'Gulp', color: '#DB4446' },
  { Icon: BuildCircleIcon, name: 'Grunt', color: '#FBA919' },
  { Icon: BugReportIcon, name: 'Cypress', color: '#00B6B4' },
];


const CircularIconAnimation: React.FC = () => {
  return (
    <Container>
      {icons.map((stack, index) => {
        const angle = (360 / icons.length) * index;
        return (
          <IconWrapper key={stack.name} angle={angle}>
            <SvgIcon component={stack.Icon} fontSize="large" sx={{ color: stack.color }} />
          </IconWrapper>
        );
      })}
    </Container>
  );
};

export default CircularIconAnimation;
