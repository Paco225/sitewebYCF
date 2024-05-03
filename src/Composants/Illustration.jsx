import image from '../assets/illu.jpg'
import { Zoom } from 'react-awesome-reveal'

const Illustration = () => {
  return (
    <div className="w-full justify-center pt-20">
          <Zoom >
              <img src={image} alt="illustration" className='flex relative w-full justify-center items-center
                mt-[-90px] pb-[40px] overflow-hidden' />
          </Zoom>

      </div>
  )
}

export default Illustration