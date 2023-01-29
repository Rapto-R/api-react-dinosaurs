/** COMPONENTE DONDE SE HACE LA PETICION A LA API
 * Y LISTA LOS PERSONAJES **/

import { useEffect, useState } from "react";
import Character from './Characters';
import { Dna } from 'react-loader-spinner'

function NavPage(props) {
  return (
    <header className="d-flex flex-column">
      <p className="fw-bold ">Pagina: {props.page}</p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary btn-sm" onClick={() => props.setPage(props.page - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
          </svg>
          Pagina: {props.page} 
        </button>

        <button className="btn btn-primary btn-sm" onClick={() => props.setPage(props.page + 1)}>
          Pagina: {props.page} 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
          
        </button>
      </div>
      
    </header>
  )
}


function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(()=> {

    async function fetchData () {
      const result = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      // const result = await fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs');
      const data = await result.json();
      setLoading(false)
      setCharacters(data.results);
    };

    fetchData()

  }, [page])

    return(
        <div className="container">

          <NavPage page={page} setPage={setPage}/>
          
          {
            loading ? <div className="d-flex justify-content-center">
                          <Dna  height="100" width="100" color="red" arialLabel="Cargando..."/> 
                      </div> 
                      :
            <div className="row">
            {characters.map((character) => {
              return(
                  <div className="col-md-4 p-2" key={character.id}>
                    <Character character={character}/>
                  </div>
                )
              })
            }
          </div>
          }
          
          <NavPage page={page} setPage={setPage}/>
          
        </div>
    )
}

export default CharacterList