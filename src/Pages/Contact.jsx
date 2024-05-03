import ContactContent from "../Composants/ContactContent";
import ContactEn from "../Composants/ContactEn";
import Footer from "../Composants/Footer";
import MapComponent from "../Composants/MapComponent";

const Contact = () => {
  return (
    <section className="section  bg-white min-h-screen sm:mt-[2px] ">
      <ContactEn/>
      <ContactContent/>
      <MapComponent/>
      <Footer/>
    </section>
  )
}

export default Contact;