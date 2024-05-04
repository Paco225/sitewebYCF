import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import { Zoom } from 'react-awesome-reveal';

const ContactContent = () => {
    return (
        <Zoom>
            <div className="flex flex-col md:flex-row justify-center items-center bg-white px-4  mt-[-10px] rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 md:place-items-center items-center mb-4  ">
                   <Zoom>
                        <div className="flex flex-col md:grid  place-items-center justify-center items-center shadow-gray-200 bg-white rounded-[10px] px-2 py-4 mr-16 w-[240px] h-32 text-center transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-xl">
                            <FaMapMarkerAlt className="w-[60px] h-5 text-black justify-center " />
                            <div className="flex flex-col">
                                <span className=' text-[22px] font-semibold pt-2'>Lieu</span>
                                <p className=' text-[17px]  '>université FHB</p>
                            </div>
                        </div>
                   </Zoom>
                  <Zoom>
                        <div className="flex flex-col  items-center  shadow-gray-200 shadow-xl justify-center hover:shadow-2xl bg-white  rounded-[10px] px-2 py-4 mr-16  w-[240px] h-32 text-center transition-all duration-300 hover:scale-110">
                            <FaEnvelope className='w-[60px] h-5 text-black justify-center ' />
                            <div className="flex flex-col">
                                <span className=' text-[22px] font-semibold pt-2'>Email</span>
                                <p className=' text-[17px]  '>ycf@gmail.com</p>
                            </div>
                        </div>
                  </Zoom>
                  <Zoom>
                        <div className="flex  items-center shadow-xl shadow-gray-200 flex-col justify-center bg-white hover:shadow-2xl rounded-[10px] px-2 py-4 mr-2 w-[240px] h-32 text-center transition-all duration-300 hover:scale-110">
                            <FaPhone className="w-[60px] h-5 text-black justify-center " />
                            <div className="flex flex-col">
                                <span className=' text-[22px] font-semibold pt-2'>Telephone</span>
                                <p className=' text-[17px]  '>+225 0707070707</p>
                            </div>
                        </div>
                  </Zoom>
                </div>
            </div>
        </Zoom>
        
    );
};

export default ContactContent;