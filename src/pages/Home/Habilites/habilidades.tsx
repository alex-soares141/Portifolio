
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
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

const StyledHabilidades = styled("div")(({ theme }) => ({
  textAlign: "center",
  alignItems: "center",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  paddingTop: "20px",
  backgroundColor: theme.palette.grey[300],
}));

const StyledCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: 'center',
  padding: '20px',
  height: '80%',

  marginLeft: "10px",
  border: "4px solid #4CAF50",
  borderRadius: "90px",
  boxShadow: '12px 4px 10px rgba(0, 0, 0, 0.1)',
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
  { Icon: PaletteIcon, name: 'Sass', color: '#CC6699' },
  { Icon: GradientIcon, name: 'Less', color: '#1D365D' },
  { Icon: BuildIcon, name: 'Gulp', color: '#DB4446' },
  { Icon: BuildCircleIcon, name: 'Grunt', color: '#FBA919' },
  { Icon: BugReportIcon, name: 'Cypress', color: '#00B6B4' },
  { Icon: BugReportIcon, name: 'Testes Unitarios', color: '#00B6B4' },
];

export default function ActionAreaCard() {
  return (
    <StyledHabilidades id="Habilidades">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          textAlign="center"
          color="Primary.contrastText"
          gutterBottom
        >
          Habilidades
        </Typography>

        <Grid container spacing={2} paddingBottom="30px" justifyContent="center">
          {icons.map((stack, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <stack.Icon sx={{ fontSize: '2rem', color: stack.color }} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {stack.name}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledHabilidades>
  );
}
