import { SetStateAction, useEffect, useState } from "react";
import Box from "@mui/material/Box/Box";
import { AnimatedBackground } from "../AnimatedBackground/AnimatedBackground";
import { getRepos } from "../services/api";

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
}

function ProjetosGithub() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [isReposVisible, setIsReposVisible] = useState(false);  // Estado para controlar a visibilidade dos repositórios

    useEffect(() => {
        getRepos()
            .then((response: { data: SetStateAction<Repo[]>; }) => {
                setRepos(response.data);
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((error: any) => {
                console.error("Erro ao buscar repositórios:", error);
            });
    }, []);

    // Função para alternar a visibilidade dos repositórios
    const handleClick = () => {
        setIsReposVisible(!isReposVisible);
    };

    return (
        <>
            <div id="projetos-no-github" className="bg-[#1E293B] text-white p-4">
                <Box className="absolute inset-0 z-0">
                    <AnimatedBackground />
                </Box>

                <div className=" text-center sm:text-left mt-6 sm:mt-0 relative z-10">
                    <h2 className="font-zendots flex justify-center text-4xl sm:text-6xl text-secondary pb-6 ">
                        Meus projetos no GitHub
                    </h2>
                    <p className="font-roboto flex justify-center text-secondary text-lg sm:text-3xl pb-20">
                        Veja todos os meus projetos do GitHub clicando no botão abaixo:
                    </p>
                    <div className="flex justify-center">
                        <button
                            onClick={handleClick}  // Chama a função quando o botão é clicado
                            className=" flex bg-botao hover:bg-botaoHover rounded-full text-white font-semibold hover:text-black py-4 px-12 border border-white hover:border-transparent pb-6"
                        >
                            {isReposVisible ? "Ocultar Projetos" : "Clique Aqui"}
                        </button>
                    </div>

                    {/* Condicionalmente renderiza os repositórios com base no estado */}
                    {isReposVisible && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5">
                            {repos.length > 0 ? (
                                repos.map((repo) => (
                                    <div
                                        key={repo.id}
                                        className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition"
                                    >
                                        <h3 className="text-xl font-semibold text-secondary">
                                            {repo.name}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {repo.description || "Sem descrição"}
                                        </p>
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-2 text-primary hover:underline"
                                        >
                                            Ver no GitHub
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <p>Carregando projetos...</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProjetosGithub;
