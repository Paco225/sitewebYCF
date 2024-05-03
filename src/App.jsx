import { BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Header from './Composants/Header';
import AnimeRoute from './Composants/AnimeRoute';


const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <AnimeRoute/>
      </Router>
    </>
  )
}
export default App;