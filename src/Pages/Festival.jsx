import FesriMission from "../Composants/FesriMission"
import FestiActi from "../Composants/FestiActi"
import FestiEn from "../Composants/FestiEn"
import FestiIntro from "../Composants/FestiIntro"
import Footer from "../Composants/Footer"
import MapComponent from "../Composants/MapComponent"
import Sponsor from "../Composants/Sponsor"

const Festival = () => {
  return (
    <section className="section  bg-white min-h-screen sm:mt-[2px] overflow-x-hidden">
      <FestiEn/>
      <FestiIntro/>
      <FesriMission/>
      <FestiActi/>
      <Sponsor/>
      <MapComponent/>
      <Footer/>
    </section>
  )
}

export default Festival