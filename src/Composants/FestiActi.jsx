import { Zoom } from 'react-awesome-reveal'
import image from '../assets/fond entete .jpg'
const FestiActi = () => {
    return (
        
        <div className=" bg-gray-100 pb-20 flex flex-col items-center space-y-8">
            {/* Section 1 */}
            <Zoom triggerOnce>
                <h1 className='text-[40px] font-semibold py-10'>ACTIVITES</h1>

            </Zoom>
          
       
            <div className="w-full pb-20 md:w-3/4 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
                
                <div className=" md:w-1/2 flex justify-center pr-6">
                    <Zoom>
                        <img src={image} alt="Image 1" className=" rounded-xl w-full h-[120%]" />
                    </Zoom>

                </div>
                <div className="md:w-1/2 md:text-left pl-10">
                    <Zoom>
                        <h1 className='pt-20 pb-4 font-bold text-[30px]'> CONCERT DE LA JEUNESSE</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta quia veniam dolores inventore sed itaque, provident eligendi debitis quae?</p>
                    </Zoom>
                   
                </div>

            </div>
            <div className="w-full pb-20 md:w-3/4 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
                <div className="md:w-1/2 md:text-left pl-10">
                    <Zoom>
                        <h1 className='pt-20 pb-4 font-bold text-[30px]'> CONCERT DE LA JEUNESSE</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta quia veniam dolores inventore sed itaque, provident eligendi debitis quae?</p>
                    </Zoom>
                   
                </div>
                <div className=" md:w-1/2 flex justify-center pr-6">
                    <Zoom>
                        <img src={image} alt="Image 1" className=" rounded-xl w-full h-[120%]" />

                    </Zoom>
                </div> 
            </div>
            <div className="w-full md:w-3/4 pb-20 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">

                <div className=" md:w-1/2 flex justify-center pr-6">
                    <Zoom>
                        <img src={image} alt="Image 1" className=" rounded-xl w-full h-[120%]" />
                    </Zoom>

                </div>
                <div className="md:w-1/2 md:text-left pl-10">
                    <Zoom>
                        <h1 className='pt-20 pb-4 font-bold text-[30px]'> CONCERT DE LA JEUNESSE</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad soluta quia veniam dolores inventore sed itaque, provident eligendi debitis quae?</p>
                    </Zoom>

                </div>

            </div>

           
             

         
        </div>
    );
};

export default FestiActi;
