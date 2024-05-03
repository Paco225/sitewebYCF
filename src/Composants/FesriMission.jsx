import { Zoom } from 'react-awesome-reveal';
import illustration from '../assets/fond entete .jpg'
const FesriMission = () => {
  return (
    
      <div className="bg-purple-1000 grid grid-cols-2 w-[100%] h-auto px-10 py-10 items-center  justify-center overflow-x-hidden">
        <Zoom>
          <div className="pl-10 overflow-x-hidden">
            <img src={illustration} alt="" className='rounded-xl' />
          </div>
        </Zoom>
     
        <Zoom>
          <div className="pl-10 overflow-x-hidden">
            <h1 className='font-semibold text-[40px] '>Titre Ici</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, beatae? Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, quae dolorem. Voluptates ab culpa repellendus. Nisi, vero voluptatibus! Consequuntur dolorum mollitia non voluptas voluptate quasi vitae esse! Provident consequatur dicta illo ullam fugit necessitatibus quibusdam esse. Ipsam eveniet fuga adipisci provident tempora omnis aspernatur dicta, obcaecati facilis dolores, nesciunt officia. amet consectetur adipisicing elit. Quia, cum!</p>
          </div>
        </Zoom>

      </div>
 
  )
}

export default FesriMission;