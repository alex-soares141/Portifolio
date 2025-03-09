import Perfil from '../../assets/perfil.jpg';

function Hero() {
    return (
        <>
            <div id='home' className="h-screen flex justify-center items-center overflow-hidden" style={{
                background: 'linear-gradient(135deg, #0D0D0D 0%, #1E293B 50%, #3B82F6 100%)'
            }}>

                <div className="z-10 flex flex-col sm:flex-row items-center sm:gap-8 p-8 sm:p-12">
                   
                    <img className="w-72 h-72 sm:w-96 sm:h-96 rounded-full mt-96 sm:mt-0 hidden sm:block" src={Perfil} alt="Meu perfil" />
                    <div className="text-center sm:text-left mt-6 sm:mt-0">
                        <h1 className="font-zendots text-4xl sm:text-6xl text-secondary pb-2">
                            Alex Soares <br />
                            Desenvolvedor Front End
                        </h1>
                        <p className="font-roboto text-secondary text-lg sm:text-3xl">
                            Desenvolvendo soluções inovadoras que transformam ideias <br /> em experiências digitais incríveis.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-6 mt-6 pb-6'>
                            <button className='py-2 px-6 sm:py-2 sm:px-4 text-secondary rounded-full bg-botao hover:bg-botaoHover'>
                                <a href="https://wa.me/5533988997674">Entre em contato</a>
                            </button>
                            <button className='py-2 px-6 sm:py-2 sm:px-9 text-secondary rounded-full bg-botao hover:bg-botaoHover'>
                                <a href="https://drive.google.com/file/d/1RPUfj-TxO1e-Co9VhEM4CZ-HlBi9-Bak/view?usp=sharing">Download CV</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
