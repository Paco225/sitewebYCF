import { Zoom } from 'react-awesome-reveal';
import backgroundImage from '../assets/fond entete .jpg';

const FestiEn = () => {
    return (
        <Zoom triggerOnce={true}>
            <div className="mb-0  pt-10"> {/* Ajout d'une marge en bas */}
                <div className="relative h-96 md:h-128 lg:h-192"> {/* Hauteur définie pour différentes résolutions */}
                    <div className="bg-black bg-opacity-50 h-[400px]">

                        <div className="h-[400px] overflow-hidden"> {/* Conteneur pour empêcher le débordement de l'image */}
                            <img
                                src={backgroundImage}
                                alt="Background"
                                className="object-cover w-full h-full opacity-100"
                            />
                        </div>

                    </div>
                    <Zoom triggerOnce = {false}>
                        <div className="absolute top-[-400px] inset-0 flex items-center justify-center">
                            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold uppercase">
                                Festival
                            </h1>
                        </div>
                    </Zoom>
                </div>
            </div>
        </Zoom>
       
    );
};

export default FestiEn;