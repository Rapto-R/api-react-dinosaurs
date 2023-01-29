/** COMPONENTE DONDE SE HACE LA PETICION A LA API DE RICK & MORTY
 * Y LISTA LOS PERSONAJES **/

import { useEffect, useState } from "react";
import Dinosaurs from './dinosaurs';
import { Dna } from 'react-loader-spinner'

function DinosaursList() {
  const [dinosaurs, setdinosaurs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {

    async function fetchData () {
    //   const result = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const result = await fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs');
      const data = await result.json();
      setLoading(false)
      setdinosaurs(data);
    };

    fetchData()

  }, [])

    return(
        
                <div className="container">
                    <h1 className="text-center fw-bold display-1 py-4">Nombres de dinosaurios de la A a la Z </h1>
            {
                    loading ? <div className="d-flex justify-content-center">
                                    <Dna  height="100" width="100" color="red" arialLabel="Cargando..."/> 
                                </div>
                            :
                        <div>
                            {dinosaurs.map(dinosaurs => {
                                return(
                                    <div>
                                        <Dinosaurs dinosaurs={dinosaurs}/>
                                    </div>
                                    )
                                })
                            }
                </div>
            }
                
           </div>
    )
}

export default DinosaursList