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
        "Orientação para resultados"
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
        <>
            <div className="bg-blue-500 text-white p-8 flex items-center justify-center min-h-96">
                <div className="text-center">
                    <h2 id="Skills" className="text-3xl sm:text-4xl font-bold pb-12 mb-8">Minhas Competências</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div>
                            <h4 className="text-xl text-center items-center font-semibold mb-2">Soft Skills</h4>
                            <p className="text-md text-start flex flex-wrap">{softSkills.join(", ")}</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold mb-2">Hard Skills</h4>
                            <p className="text-md text-start flex flex-wrap">{hardSkills.join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Habilidades
