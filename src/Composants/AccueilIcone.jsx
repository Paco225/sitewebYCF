import '../Styles/AccueilIcone.css';
import icon1 from '../assets/Rectangle 7 copie.png';
import icon2 from '../assets/icone2.png';
import icon3 from '../assets/icone3.png';
import icon4 from '../assets/icone4.png';
import { Zoom } from 'react-awesome-reveal';

const AccueilIcone = () => {
    return (
        <div className="icon-grid">
            <Zoom cascade={true} duration={900}>
                <div className="icon-grid__item sm  ">
                    <img src={icon1} className="icon-grid__icon mx-auto w-24 sm:w-32" alt="Icon 1" />
                    <p className="icon-grid__description text-xs sm:text-sm md:text-base">CONFERENCE</p>
                </div>

                <div className="icon-grid__item ">
                    <img src={icon2} className="icon-grid__icon mx-auto w-24 sm:w-32" alt="Icon 2" />
                    <p className="icon-grid__description text-xs sm:text-sm md:text-base">PANEL DECHANGE <br />ET DE TRANSFORMATION <br />DE MENTALITE</p>
                </div>

                <div className="icon-grid__item  ">
                    <img src={icon3} className="icon-grid__icon mx-auto w-24 sm:w-32" alt="Icon 3" />
                    <p className="icon-grid__description text-xs sm:text-sm md:text-base">TEMPS DE CELEBRATION <br />ET DADORATION <br />EN EAU PROFONDE</p>
                </div>

                <div className="icon-grid__item " >
                    <img src={icon4} className="icon-grid__icon mx-auto w-24 sm:w-32" alt="Icon 4" />
                    <p className="icon-grid__description text-xs sm:text-sm md:text-base">ESPACE <br />GASTRONOMIQUE <br />GEANT</p>
                </div>
            </Zoom>
        </div>
    );
};

export default AccueilIcone;
