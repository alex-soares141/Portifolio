import { styled, keyframes } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
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

const StyledHabilidades = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  paddingTop: "20px",
  paddingBottom: "16px",
  backgroundColor: theme.palette.grey[300],
}));

const IconContainer = styled('div')(({ color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px',
  padding: '20px',
  borderRadius: '50%',
  backgroundColor: color,
  width: '80px',
  height: '80px',
  transition: 'transform 0.3s',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
  animation: `${fadeInScale} 0.8s ease-in-out`,

  '&:hover': {
    transform: 'scale(1.2)',
    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
  },
}));

const icons = [
  { Icon: HtmlIcon, name: 'HTML', color: '#E34F26' },
  { Icon: CssIcon, name: 'CSS', color: '#1572B6' },
  { Icon: JavascriptIcon, name: 'JavaScript', color: '#F7DF1E' },
  { Icon: CodeIcon, name: 'React', color: '#61DAFB' },
  { Icon: PaletteIcon, name: 'Sass', color: '#CC6699' },
  { Icon: CodeIcon, name: 'TypeScript', color: '#3178C6' },
  { Icon: CodeIcon, name: 'Vue.js', color: '#42b883' },
  { Icon: ViewQuiltIcon, name: 'Bootstrap', color: '#563d7c' },
  { Icon: SettingsEthernetIcon, name: 'jQuery', color: '#0769AD' },
  { Icon: GradientIcon, name: 'Less', color: '#1D365D' },
  { Icon: BuildIcon, name: 'Gulp', color: '#DB4446' },
  { Icon: BuildCircleIcon, name: 'Grunt', color: '#FBA919' },
  { Icon: BugReportIcon, name: 'Cypress', color: '#00B6B4' },
  { Icon: BugReportIcon, name: 'Testes Unitarios', color: '#00B6B4' },
];

export default function Habilidades() {
  return (
    <StyledHabilidades id="Habilidades">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          gutterBottom
        >
          Habilidades
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {icons.map((stack, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <IconContainer color={stack.color}>
                <stack.Icon sx={{ fontSize: '2rem', color: '#fff' }} />
              </IconContainer>
              <Typography variant="h6" textAlign="center" color="textPrimary">
                {stack.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledHabilidades>
  );
}
