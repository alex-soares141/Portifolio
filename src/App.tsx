
import Experiencias from './components/experiencias/experiencias.tsx'

import Habilidades from './components/habilidades/habilidades.tsx'
import Hero from './components/hero/hero.tsx'
import NavBar from './components/NavBar/NavBar.tsx'
import Projetos from './components/projetos/projetos.tsx'
import ProjetosGithub from './components/projetosgit/projetosGithub.tsx'
import Sobre from './components/Sobre/sobre.tsx'

function App() {


  return (
    <>
      <NavBar />
      <Hero />
      <Sobre />
      <Projetos />
      <Habilidades />
      <ProjetosGithub />
      <Experiencias />
    

    </>
  )
}

export default App
