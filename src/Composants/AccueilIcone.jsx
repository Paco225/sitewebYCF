import '../Styles/AccueilIcone.css'
import icon1 from '../assets/Rectangle 7 copie.png'
import icon2 from '../assets/icone2.png'
import icon3 from '../assets/icone3.png'
import icon4 from '../assets/icone4.png'
import { Fade } from 'react-awesome-reveal'

const AccueilIcone = () => {
    return (
        <div className="icon-grid">
            <Fade left duration={1000} delay={200} distance="60px">
                <div className="icon-grid__item">
                    <img src={icon1} className="icon-grid__icon" />
                    <p className="icon-grid__description">CONFERENCE</p>
                </div>
            </Fade>
            <Fade left duration={1000} delay={200} distance="60px">
                <div className="icon-grid__item">
                    <img src={icon2} className="icon-grid__icon" />
                    <p className="icon-grid__description">PANEL DECHANGE <br />ET DE TRANSFORMATION <br />DE MENTALITE</p>
                </div>

            </Fade>
            <Fade right duration={1000} delay={200} distance="60px">
                <div className="icon-grid__item">
                    <img src={icon3} className="icon-grid__icon" />
                    <p className="icon-grid__description">TEMPS DE CELEBRATION <br />ET DADORATION <br />EN EAU PROFONDE</p>
                </div>
            </Fade>
            <Fade right duration={1000} delay={200} distance="60px">
                <div className="icon-grid__item">
                    <img src={icon4} className="icon-grid__icon" />
                    <p className="icon-grid__description">ESPACE <br />GASTRONOMIQUE <br />GEANT</p>
                </div>
            </Fade>

        </div>
    );
};

export default AccueilIcone;