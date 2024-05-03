import { Zoom } from "react-awesome-reveal";
const MapComponent = () => {
    return (
        <Zoom triggerOnce={false}>
            <div className=" mt-5  flex justify-center items-center h-screen">
                <iframe
                    className="w-[80%] rounded-sm h-[80%] "
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4659328503412!2d-3.988830425960504!3d5.345621635731316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ec81f79543ef%3A0x1d950e333a37402c!2sUniversit%C3%A9%20F%C3%A9lix-Houphou%C3%ABt-Boigny!5e0!3m2!1sfr!2sci!4v1714317181366!5m2!1sfr!2sci"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
        </Zoom>
    
    );
};

export default MapComponent;
