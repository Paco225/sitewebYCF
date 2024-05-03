import logo  from '../assets/logo1.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#252d6b] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <img src={logo} className="text-white w-[40%] font-bold mb-4"></img>
                        <p className="mb-4">Rejoignez nous pour <br/>partager une experience inoubliable </p>
                      
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Liens Utiles</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    Accueil
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    Festival
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    Billeterie
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact" className="hover:text-white transition-colors duration-300">
                                    Contact
                                </a>
                            </li>
                       
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Contacts</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    ycf@gmail.com
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    0404040404
                                </a>
                            </li>
                           
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-4">Suivez Nous</h3>
                        <div className="flex mt-4 md:mt-0">
                            <a
                                href="#"
                                className="text-orange-500 hover:text-white mr-4 transition-colors duration-300"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                href="#"
                                className="text-orange-600 hover:text-white mr-4 transition-colors duration-300"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="text-orange-500 hover:text-white mr-4 transition-colors duration-300"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="text-orange-500 hover:text-white transition-colors duration-300"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;