import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Festival from "../Pages/Festival";
// eslint-disable-next-line no-unused-vars
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
const AnimeRoute = () => {
    const location = useLocation();
    return (
        <AnimatePresence initial={true} mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/festival" element={<Festival />} />
            </Routes>
        </AnimatePresence>
    
      
    )
}
export default AnimeRoute;