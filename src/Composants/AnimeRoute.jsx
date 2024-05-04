import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import Festival from '../Pages/Festival';

const AnimeRoute = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Déplacer la fenêtre vers le haut de la page lors du changement de route
    }, [location.pathname]);

    return (
        <AnimatePresence initial={true} mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/festival" element={<Festival />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimeRoute;
