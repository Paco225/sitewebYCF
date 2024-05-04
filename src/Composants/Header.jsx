import logo from '../assets/logo1.png'
import { useState } from 'react';
import {Link} from 'react-router-dom'


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" bg-[#00002c] h-19 px-6  md:px-20 md:py-6 w-full fixed top-0 z-40">
            <div className="flex justify-between items-center my-[-8px] ">
                {/* Logo */}
                <div className="flex items-center ">
                    <img src={logo} alt="Logo" className="h-14 w-auto mr-4 " />
                </div>
                {/* Menu hamburger pour mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-gray-300 focus:outline-none"
                    >
                        <svg
                            className="h-auto w-6 fill-current relative left-20"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm16 5H4a1 1 0 100 2h16a1 1 0 100-2zm0 5H4a1 1 0 000 2h16a1 1 0 000-2z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                
                <ul className="hidden md:flex justify-center space-x-6">
                    <li>
                        <Link to={'/'} className="text-white font-semibold hover:text-gray-300">ACCUEIL</Link>
                    </li>
                    <li>
                        <Link to={'/festival'} className="text-white font-semibold hover:text-gray-300">FESTIVAL</Link>
                    </li>
                    <li>
                        <a href="#" className="text-white font-semibold hover:text-gray-300">BILLETERIE</a>
                    </li>
                    <li>
                        <Link to={'/contact'} className="text-white font-semibold hover:text-gray-300">CONTACT</Link>
                    </li>
                </ul>

                {/* Bouton Chat WhatsApp */}
                <a href="# "> <button className="hidden md:block bg-[#0b0383] hover:bg-[#2020d6] text-white font-semibold py-2 px-4 rounded">
                    CHAT WHATSAPP
                </button></a>
                
            </div>

            {/* Liens en menu hamburger pour mobile */}
            {isOpen && (
                <ul className="md:hidden mt-4 mb-3 ">
                    <li>
                        <Link className="block text-white hover:text-gray-300 py-2">ACCUEIL</Link>
                    </li>
                    <li>
                        <Link className="block text-white hover:text-gray-300 py-2">FESTIVAL</Link>
                    </li>
                    <li>
                        <a href="#" className="block text-white hover:text-gray-300 py-2">BILLETERIE</a>
                    </li>
                    <li>
                        <Link className="block text-white hover:text-gray-300 py-2">CONTACT</Link>
                    </li>
                    {/* Bouton Chat WhatsApp pour mobile */}
                    <li>
                        <button className="block bg-blue-600 px-2 rounded text-white hover:text-gray-300 py-2">Chat WhatsApp</button>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Header;
