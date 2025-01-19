import { useState } from 'react';

const NavBar = () => {
    const menu = ['Home', 'Sobre', 'Projetos', 'Projetos_no_GitHub', 'Skills', 'Experiencias', 'Contatos'];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-[#1E293B] text-white p-8 z-[9999] fixed w-full border">
            {/* Navbar para dispositivos grandes */}
            <ul className="hidden md:flex flex-wrap gap-4 justify-start sm:justify-center md:justify-between w-full">
                {menu.map((item) => (
                    <li key={item} className="flex justify-between items-center">
                        <a
                            className="hover:text-gray-400 cursor-pointer"
                            href={`#${item.toLowerCase().replace(/_/g, '-')}`} // Substituindo "_" por "-" no href
                        >
                            {item.replace(/_/g, ' ')}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Menu Hamburguer para dispositivos menores */}
            <div className="md:hidden flex justify-between items-center">
                <div className="text-white text-3xl cursor-pointer" onClick={toggleMenu}>
                    {isMenuOpen ? 'X' : '☰'}
                </div>
                {isMenuOpen && (
                    <ul className="absolute top-16 left-0 bg-[#1E293B] w-full py-4 px-8 text-center">
                        {menu.map((item) => (
                            <li key={item} className="py-2">
                                <a
                                    className="hover:text-gray-400 cursor-pointer"
                                    href={`#${item.toLowerCase().replace(/_/g, '-')}`} // Substituindo "_" por "-" no href
                                    onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um item
                                >
                                    {item.replace(/_/g, ' ')}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default NavBar;
