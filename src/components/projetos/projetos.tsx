import Box from "@mui/material/Box/Box";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground";
import Apresentação from '../../assets/Apresentação.png'
import Disney from '../../assets/Disney.png'

import Teste from '../../assets/TesteEbac.png'
import Fusion from '../../assets/Fusion.png'
import Galeria from '../../assets/Galeria.png'
import Eplay from '../../assets/Eplay.png'
import Volutanrio from '../../assets/voluntario.png'



function Projetos() {
    return (
        <>
            <div className="bg-[#1E293B] text-white p-4">
                <Box className="absolute inset-0 z-0">
                    <AnimatedBackground />
                </Box>

                <div className="text-center sm:text-left mt-6 sm:mt-0 relative z-10">
                    <h2 id="projetos" className="font-zendots flex justify-center text-4xl sm:text-6xl text-secondary pb-12">
                        Principais projetos de estudos
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                    {/* Projeto 1 */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-72 object-cover rounded-md" src={Apresentação} alt="Apresentação" />
                        <h3 className="p-3 font-inter">Apresentação a Fusion</h3>
                        <p className="p-3 font-inter text-sm text-center">Esse trabalho foi desenvolvido como desafio
                            para a Front End Fusion em Tailwind Css como apresentação e demonstração de habilidades para ingressar como Desenvolvedor Front End
                            Junio</p>
                    </div>

                    {/* Projeto 2 */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-72 object-cover rounded-md" src={Disney} alt="Disney Plus" />
                        <h3 className="p-3 font-inter">Disney Plus</h3>
                        <p className="p-3 font-inter text-sm text-center">Essa página foi desenvolvida durante meu curso de Front End feito na Ebac, onde o intuito
                            foi realizar um clone da página da Disney + utilizando HTML, CSS e JavaScript</p>
                    </div>



                    {/* Projeto 4 */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-72 object-cover rounded-md" src={Teste} alt="Teste Final EBAC" />
                        <h3 className="p-3 font-inter">Teste Final EBAC</h3>
                        <p className="p-3 font-inter text-sm text-center">Essa página foi um enorme desafio para mim, pois eu tinha que desenvolver uma página totalmente responsiva, consumindo uma API Fake de
                            um restaurante e implementar um carrinho de compras com validação de pagamento.</p>
                    </div>

                    {/* Projeto 5 */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-72 object-cover rounded-md" src={Fusion} alt="Pórtifolio colaborativo" />
                        <h3 className="p-3 font-inter">Pórtifolio colaborativo</h3>
                        <p className="p-3 font-inter text-sm text-center">Esse desenvolvimento significa muito em minha carreira, o primeiro projeto trabalhando juntamente a outros
                            desenvolvedores, onde eu aprendi muito sobre equipe e trabalho em equipe.</p>
                    </div>

                    {/* Projeto 6 */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-72 object-cover rounded-md" src={Galeria} alt="Galeria de Imagens" />
                        <h3 className="p-3 font-inter">Galeria de Imagens</h3>
                        <p className="p-3 font-inter text-sm text-center">Galeria de imagens feita com Tailwind Css, utilizando muita logica de programação onde você pode clicar e filtrar as imagens
                            categorias</p>
                    </div>

                    {/* Projeto 7 */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-72 object-cover rounded-md" src={Eplay} alt="Eplay Games" />
                        <h3 className="p-3 font-inter">Eplay Games</h3>
                        <p className="p-3 font-inter text-sm text-center">Essa página também foi construida para estudos muito parecida com a pagina de teste final da Ebac
                            onde eu tinha que desenvolver uma página totalmente responsiva, consumindo uma API Fake porem de games.</p>
                    </div>

                    {/* Projeto 8 */}
                    <div className="flex flex-col items-center">
                        <img className="w-full h-72 object-cover rounded-md" src={Volutanrio} alt="Código certo" />
                        <h3 className="p-3 font-inter">Código certo</h3>
                        <p className="p-3 font-inter text-sm text-center">Essa foi uma página desenvolvida no meu primeiro projeto voluntario, porém não pude dar continuidade
                            no projeto na época de estudos.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projetos;
