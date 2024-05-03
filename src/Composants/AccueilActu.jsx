import { Zoom } from 'react-awesome-reveal'
import image from '../assets/orange.jpg'
const AccueilActu = () => {
  return (
          <div className="bg-gray-100 py-8">
              <h1 className="text-3xl font-bold text-center mb-8">Actualités</h1>
              <Zoom>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                      <img src={image} alt="Actualité 1" className="w-full h-auto mb-4 rounded-lg" />
                      <p className="text-gray-800">Texte de lactualité 1</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                      <img src={image} alt="Actualité 2" className="w-full h-auto mb-4 rounded-lg" />
                      <p className="text-gray-800">Texte de lactualité 2</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                      <img src={image} alt="Actualité 3" className="w-full h-auto mb-4 rounded-lg" />
                      <p className="text-gray-800">Texte de lactualité 3</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                      <img src={image} alt="Actualité 4" className="w-full h-auto mb-4 rounded-lg" />
                      <p className="text-gray-800">Texte de lactualité 4</p>
                  </div>
              </div>
              </Zoom>
             
          </div>
    
      
  )
}

export default AccueilActu