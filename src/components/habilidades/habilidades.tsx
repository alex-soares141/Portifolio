import { motion } from "framer-motion";

function Habilidades() {
    const softSkills = [
        "Comunicativo",
        "Trabalho em equipe",
        "Adaptabilidade",
        "Colaboração",
        "Comunicação",
        "Organização",
        "Analítico",
        "Proatividade",
        "Resiliência",
        "Empatia",
        "Pensamento crítico",
        "Gestão do tempo",
        "Criatividade",
        "Liderança",
        "Flexibilidade",
        "Resolução de problemas",
        "Autogestão",
        "Escuta ativa",
        "Gestão de conflitos",
        "Orientação para resultados",
    ];

    const hardSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Vue",
        "Redux",
        "Material UI",
        "Tailwind CSS",
        "SASS/SCSS",
        "Styled Components",
        "Git",
        "GitHub",
        "Figma",
        "Jest",
        "React Testing Library",
        "Webpack",
        "Vite",
        "ESLint",
        "Prettier",
        "RESTful APIs",
        "Axios",
    ];

    return (
        <div className="bg-blue-500 text-white p-8 flex items-center justify-center min-h-screen">
            <div className="text-center w-full max-w-6xl">
                <h2
                    id="Skills"
                    className="font-zendots text-4xl sm:text-6xl text-secondary pb-12"
                >
                    Minhas Competências
                </h2>
                <div className="flex flex-col gap-12">
                    <motion.div
                        className="p-6 bg-[#1E293B] rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-2xl font-semibold mb-4 font-roboto">
                            Soft Skills
                        </h4>
                        <ul className="text-md text-start flex flex-wrap gap-4">
                            {softSkills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="bg-blue-600 py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-colors"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        className="p-6 bg-[#1E293B] rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-2xl font-semibold mb-4 font-roboto">
                            Hard Skills
                        </h4>
                        <ul className="text-md text-start flex flex-wrap gap-4">
                            {hardSkills.map((skill, index) => (
                                <li
                                    key={index}
                                    className="bg-blue-600 py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-colors"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Habilidades;
