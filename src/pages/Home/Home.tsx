

import NavBar from "../../components/StyledButton/NavBar/NavBar";
import Habilidades from "./Habilites/habilidades";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Habilidades />



    </>
  );
}


export default Home;
