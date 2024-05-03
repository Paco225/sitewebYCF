import AccueilEnt from "../Composants/AccueilEnt"
import AccueilIcone from "../Composants/AccueilIcone"
import CallToAction from "../Composants/CallToAction"
import Illustration from "../Composants/Illustration"
import Stat from "../Composants/Stat"
import Sponsor from "../Composants/Sponsor"
import Footer from '../Composants/Footer'
import AccueilText from "../Composants/AccueilText"
import AccueilActu from "../Composants/AccueilActu"

const Home = () => {
  return (
    <div className="section  bg-white min-h-screen sm:mt-[2px] overflow-x-hidden">
      <AccueilEnt/>
      <AccueilIcone/>
      <Stat/>
      <CallToAction/>
      <Illustration/>
      <AccueilText/>
      <AccueilActu/>
      <Sponsor />
      <Footer/>
      

      
    </div>
  )
}

export default Home