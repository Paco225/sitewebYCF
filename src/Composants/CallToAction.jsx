import { Fade, Zoom } from 'react-awesome-reveal';
import bleu from '../assets/bleu.jpg'
import orange from  '../assets/orange.jpg'
import '../Styles/CallToAction.css'
Fade
const CallToAction = () => {
    return (
        <Zoom >
            <div className="flex justify-center">
                <div className='w-1/2 pb-4'>
                    <div className="relative">
                        <Zoom cascade={true}>      
                            <img src={bleu} alt="image 1" className='block w-full h-auto' />
                        </Zoom>
                        <a href='#' className='absolute top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-[26px]'>
                            SINSCRIRE
                        </a>
                    </div>
                </div>
                <div className='w-1/2 pb-4'>
                    <div className="relative">
                        <Zoom>
                            <img src={orange} alt="image 1" className='block w-full h-auto' />

                        </Zoom>
                        <Zoom>
                            
                        </Zoom>
                        <a href='#' className='absolute top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold text-[26px] '>
                            RESERVER UN BILLET
                        </a>
                    </div>
                </div>


            </div>
        </Zoom>
        

    )
}

export default CallToAction;