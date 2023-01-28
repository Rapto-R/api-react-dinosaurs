
import { useEffect, useState } from "react";
import Character from './Characters';
import Swal from 'sweetalert2/dist/sweetalert2.all';

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {

    async function fetchData () {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      // const result = await fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs');
      const data = await result.json();
      setCharacters(data.results);
    };

    fetchData()

  }, [])

    if (loading) {
      return(
      Swal.fire('Error', message, 'error')
      )
    }

    return(
        <div className="container">
          
          <div className="row">
            {characters.map((character) => {
              return(
                  <div className="col-md-4" key={character.id}>
                    <Character character={character}/>
                  </div>
                )
              })
            }
          </div>

        </div>
    )
}

export default CharacterList