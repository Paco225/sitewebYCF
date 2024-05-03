import CountUp from 'react-countup';
import '../Styles/Stat.css'
import { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
Fade
const Stat = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const statsSection = document.querySelector('.stats');
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(statsSection);
    }, []);

    return (
        <div className="stats">
            <Fade bottom >
                <div className="stats__item">

                    <span>+</span>
                    <CountUp className="stats__number" start={inView ? 0 : null} end={969} duration={3} />
                    <p className="stats__label">Participants attendus</p>


                </div>
                <div className="stats__item">
                    <span>+</span>
                    <CountUp className="stats__number" start={inView ? 0 : null} end={399} duration={3} />
                    <p className="stats__label">Billets déjà vendus</p>
                </div>


            </Fade>
        </div>
    );
};

export default Stat;