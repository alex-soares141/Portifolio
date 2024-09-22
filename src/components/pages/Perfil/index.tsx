import Perfil from '../../../assets/Perfil.jpg'
import { StyledSection } from "./styles";

const Section = () => {
  return (
    <StyledSection>

      <h1>Meu nome é Alex Soares</h1>
      <h2>Desenvolvedor Front End</h2>
      <img src={Perfil} alt="" />
    </StyledSection>
  );
};

export default Section;
