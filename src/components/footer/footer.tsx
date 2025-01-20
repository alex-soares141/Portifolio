import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {






    return (
        <div id='contatos' className="bg-[#1E293B] text-white p-8 z-[9999]  w-full border">
            <h5 className='font-zendots flex justify-center text-2xl sm:text-4xl text-secondary pb-12'>Conecte-se comigo </h5>
            <div className="flex justify-center gap-12 items-center  ">
                <a href="https://www.linkedin.com/in/alex-soares-de-oliveira-669885308/">
                    <LinkedInIcon fontSize='large' color='info' />
                </a>
                <a href="https://github.com/alex-soares141">
                    <GitHubIcon fontSize='large' />
                </a>
                <a href="https://wa.me/5533988997674">
                    <WhatsAppIcon fontSize='large' color='success' />
                </a>
            </div>
            <div className='flex justify-center pt-8'>
                <p>&copy; 2025 Alex Soares de Oliveira. Todos os direitos reservados </p>
            </div>
        </div>
    );
};

export default Footer;
