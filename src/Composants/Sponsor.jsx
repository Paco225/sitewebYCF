import { Fade, Zoom } from 'react-awesome-reveal';
import logo1 from '../assets/logofficiel.png';
import logo2 from '../assets/logofficiel.png';
import logo3 from '../assets/logofficiel.png';
import logo4 from '../assets/logofficiel.png';
import logo5 from '../assets/logofficiel.png';
import logo6 from '../assets/logofficiel.png';
import logo7 from '../assets/logofficiel.png';
import logo8 from '../assets/logofficiel.png';
import logo9 from '../assets/logofficiel.png';
import logo10 from '../assets/logofficiel.png';
import logo11 from '../assets/logofficiel.png';
import logo12 from '../assets/logofficiel.png';
import logo13 from '../assets/logofficiel.png';
import logo14 from '../assets/logofficiel.png';
// ... (rest of your imports)

const Sponsor = () => {
    const logos = [
        logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14 
    ];

    return (
        <div className=" bg-[#ffffff]
    px-20 pb-60 
    text-aligns
    overflow-hidden
    block md:p-8
    pt-20">
            <Fade direction='up'>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-4 md:mb-8 text-">
                    ILS SOUTIENNENT LE PROJET
                </h2>
            </Fade>
            <Zoom bottom >
                <div className="grid grid-cols-5 justify-center items-center  md:gap-8">
                    {logos.map((logo, index) => (
                        <div key={index} className="w-1/3 md:w-auto mb-1 ">
                            <Zoom>
                                <img src={logo} alt={`Logo ${index + 1}`} className="mx-auto h-12 md:h-auto w-[60%]" />
                            </Zoom>
                        </div>
                    ))}
                </div>
            </Zoom>
        </div>
    );
};

export default Sponsor;
