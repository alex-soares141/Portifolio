import Box from "@mui/material/Box/Box";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground";
import Apresentação from '../../assets/Apresentação.png';
import Disney from '../../assets/Disney.png';
import Store from '../../assets/Store.png';
import Teste from '../../assets/TesteEbac.png';
import Fusion from '../../assets/Fusion.png';
import Galeria from '../../assets/Galeria.png';
import Eplay from '../../assets/Eplay.png';
import Volutanrio from '../../assets/voluntario.png';
import Otimização from '../../assets/Otimização.png';
import Worx from '../../assets/Worxs.png'
function Projetos() {
    return (
        <>
            <div className="bg-[#1E293B] text-white p-8">
                <Box className="absolute inset-0 z-0">
                    <AnimatedBackground />
                </Box>

                <div className="text-center sm:text-left mt-6 sm:mt-0 relative z-10">
                    <h2 id="projetos" className="font-zendots flex justify-center text-4xl sm:text-6xl text-secondary pb-12">
                        Meus projetos
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
                    {[

                        {
                            img: Otimização,
                            alt: "Otimização Wordpress",
                            title: "Projeto Free Lancer",
                            description:
                                "Esse foi um trabalho Free lancer desenvolvido para Worxbase em Wordpress, onde o principal objetivo era realizar melhorias na página como melhorar a experiência do usuário, usabilidade e performance.",
                            link: "https://ensino.rpbcompany.com.br/"
                        },
                        {
                            img: Worx,
                            alt: "Adição de itens",
                            title: "Projeto Free Lancer",
                            description:
                                "Esse foi mais um trabalho desenvolvido para Worxbase, onde foi necessario criar um campo de mensagem na pagina do blog já existente incluindo um desing responsivo em duas colunas.",
                            link: "https://trendschool.com.br/"
                        },
                        {
                            img: Apresentação,
                            alt: "Apresentação",
                            title: "Apresentação a Fusion",
                            description:
                                "Desafio para a Front End Fusion, usando Tailwind CSS para apresentar e demonstrar habilidades como Desenvolvedor Front End Junior.",
                            link: "https://apresentacao-pessoal-frontend-roan.vercel.app/"
                        },
                        {
                            img: Disney,
                            alt: "Disney Plus",
                            title: "Disney Plus",
                            description:
                                "Clone da página da Disney+ desenvolvido durante o curso de Front End na EBAC, utilizando HTML, CSS e JavaScript.",
                            link: "https://alex-clone-disneyplus.vercel.app/"
                        },
                        {
                            img: Store,
                            alt: "Mx Store",
                            title: "Mx Store",
                            description:
                                "Página autoral feita com HTML, CSS e JavaScript para testar habilidades, criada como uma loja de equipamentos esportivos.",
                            link: "https://mx-store.vercel.app/"
                        },
                        {
                            img: Teste,
                            alt: "Teste Final EBAC",
                            title: "Teste Final EBAC",
                            description:
                                "Página responsiva consumindo uma API fake de restaurante, com carrinho de compras e validação de pagamento.",
                            link: "https://e-food-one.vercel.app/"
                        },
                        {
                            img: Fusion,
                            alt: "Portfólio colaborativo",
                            title: "Portfólio colaborativo",
                            description:
                                "Primeiro projeto em equipe, aprendendo sobre trabalho colaborativo com outros desenvolvedores.",
                            link: "https://x-men-portifolio-colaborativo.vercel.app/"
                        },
                        {
                            img: Galeria,
                            alt: "Galeria de Imagens",
                            title: "Galeria de Imagens",
                            description:
                                "Galeria feita com Tailwind CSS, permitindo filtrar imagens por categorias com lógica de programação.",
                            link: "https://desafio-galeria-de-imagem-frontendfusion-hbbk.vercel.app/"
                        },
                        {
                            img: Eplay,
                            alt: "Eplay Games",
                            title: "Eplay Games",
                            description:
                                "Página de estudo semelhante ao Teste Final da EBAC, consumindo uma API fake de games.",
                            link: "https://eplay-alex.vercel.app/"
                        },
                        {
                            img: Volutanrio,
                            alt: "Código certo",
                            title: "Código certo",
                            description:
                                "Primeiro projeto voluntário desenvolvido, mas interrompido durante o período de estudos.",
                            link: "https://alex-trabalho-voluntario.vercel.app/"
                        }
                    ].map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-72 h-[500px] bg-[#2D3748] rounded-md shadow-lg p-4"
                        >
                            <img
                                className="w-full h-40 object-cover rounded-md"
                                src={project.img}
                                alt={project.alt}
                            />
                            <h3 className="mt-3 font-inter text-lg font-bold">{project.title}</h3>
                            <p className="mt-2 font-inter text-sm text-center flex-1">{project.description}</p>
                            <button className="w-full mt-3 p-3 font-inter text-sm text-center bg-botao hover:bg-botaoHover rounded-full">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Acessar
                                </a>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projetos;
