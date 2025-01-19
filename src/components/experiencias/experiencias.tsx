import Box from "@mui/material/Box/Box";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground";


function Experiencias() {
    return (
        <>
            <div id="experiencias" className="bg-[#3B82F6] text-white p-8">
                <Box className="absolute inset-0 z-0">
                    <AnimatedBackground />
                </Box>

                <div className="text-center sm:text-left mt-6 sm:mt-0 relative z-10">
                    <h2 className="font-zendots flex justify-center text-4xl sm:text-6xl text-secondary pb-12">
                        Experiencias mais relevantes
                    </h2>
                </div>

                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-6 p-5 ">
                    {[
                        {

                            title: "Facil Sistemas",
                            description:
                                "Responsável pela implantação de software e treinamento de clientes, tanto presencialmente quanto por acesso remoto. Realizo atendimento a chamados, oferecendo orientação e suporte nas demandas dos clientes. Faço a análise de possíveis bugs, comunicando com a equipe interna para encaminhar as questões ao setor de desenvolvimento e aplicar as correções necessárias. Utilizo o Firebird 2.5 e o IBExpert para tratar bugs e erros no banco de dados, garantindo a estabilidade e o bom desempenho do sistema.",

                        },
                        {


                            title: "Worxbase",
                            description:
                                "Atualmente, atuo como autônomo na plataforma WorxBase, oferecendo serviços de criação de sites com WordPress e tecnologias de ponta. Atendo clientes de diversos segmentos, buscando sempre entregar soluções completas e personalizadas. Meu foco é aliar funcionalidades inovadoras a designs modernos, com total atenção às necessidades específicas de cada projeto, garantindo a melhor experiência e resultados para os meus clientes.",

                        },
                        {


                            title: "Fusion FrontEnd",
                            description:
                                "Atuo como voluntário e estudante no time de desenvolvedores da Front Fusion, contribuindo para o desenvolvimento de sites utilizando tecnologias de ponta do mercado. Minha atuação foca em aliar funcionalidades inovadoras a designs modernos, trabalhando em colaboração com uma equipe multidisciplinar. Essa experiência tem como objetivo não apenas entregar soluções completas e personalizadas, mas também aprimorar continuamente minhas habilidades técnicas e adquirir novos conhecimentos.",

                        },

                    ].map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center w-full h-[700px] md:h-[400px] bg-[#2D3748] rounded-md shadow-lg p-4"
                        >


                            <h3 className="mt-3 font-inter text-3xl font-bold">{project.title}</h3>
                            <p className="mt-2 font-inter text-md text-start flex-1">{project.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Experiencias;
