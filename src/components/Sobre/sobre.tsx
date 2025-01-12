import { motion } from 'framer-motion';  // Importando o Framer Motion
import Perfil from '../../assets/perfil1.jpg';

function Sobre() {
    return (
        <div id="sobre" className="h-auto bg-background2 flex flex-col items-center gap-10 p-8 sm:p-12">
            <h2 className="font-zendots text-4xl sm:text-6xl text-secondary pb-2">
                Sobre mim
            </h2>

            <div className="flex max-w-360 gap-10 flex-col sm:flex-row items-center">
                <motion.img
                    className="w-80 h-80 sm:w-96 sm:h-96 rounded-full sm:mt-0"
                    src={Perfil}
                    alt="Meu perfil"
                    initial={{ opacity: 3, x: -100 }}   // Inicialização do movimento
                    animate={{ opacity: 2, x: 0 }}       // Animação para fade-in-right
                    transition={{ duration: 3 }}         // Duração da animação
                />
                <motion.p
                    className="font-roboto text-secondary text-lg sm:text-1xl font-bold"
                    initial={{ opacity: 3, x: 100 }}   // Inicialização do movimento
                    animate={{ opacity: 2, x: 0 }}     // Animação para fade-in-right
                    transition={{ duration: 3 }}       // Duração da animação
                >
                    Meu nome é Alex Soares de Oliveira, tenho 30 anos e sou natural de Guanhães, MG.

                    Minha trajetória profissional começou em 2011, quando iniciei minha carreira como vendedor em lojas de materiais de construção. Sempre fui curioso pela área de tecnologia, e em 2021, decidi dar um grande passo e ingressar no mercado de TI. Foi quando encontrei minha verdadeira vocação. No ano seguinte, comecei a faculdade de Análise e Desenvolvimento de Sistemas, concluindo minha graduação em 2024. Além disso, finalizei o curso profissionalizante de Desenvolvedor Front-End pela EBAC, onde desenvolvi uma base sólida em tecnologias modernas.

                    Atualmente, trabalho como desenvolvedor autônomo na Worxbase e sou voluntário na Fusion Frontend, onde aplico e continuo aprimorando minhas habilidades com as ferramentas mais atuais do mercado. Essas experiências têm sido fundamentais para consolidar minha carreira e expandir meus conhecimentos no desenvolvimento Front End.
                </motion.p>
            </div>
        </div>
    );
}

export default Sobre;
