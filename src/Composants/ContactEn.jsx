import { Zoom } from 'react-awesome-reveal';
import backgroundImage from '../assets/fond entete .jpg';

const ContactEn = () => {
    return (
        <div className="mb-20  pt-10"> {/* Ajout d'une marge en bas */}
            <div className="relative h-96 md:h-128 lg:h-192"> {/* Hauteur définie pour différentes résolutions */}
                <div className="bg-black bg-opacity-50 h-[400px]">
                    <Zoom triggerOnce infinite>
                        <div className="h-[400px] overflow-hidden"> {/* Conteneur pour empêcher le débordement de l'image */}
                            <img
                                src={backgroundImage}
                                alt="Background"
                                className="object-cover w-full h-full opacity-100"
                            />
                        </div>
                    </Zoom>
                </div>
                <Zoom triggerOnce={false} infinite>
                    <div className="absolute top-[-400px] inset-0 flex items-center justify-center">
                            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold uppercase">
                                Contacts
                            </h1>       
                    </div>
            </Zoom>
            </div>
        </div>
    );
};

export default ContactEn;