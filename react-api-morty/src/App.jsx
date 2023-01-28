import { useEffect, useState } from "react";
import CharacterList  from "./components/CharacterList";
import Characters  from "./components/Characters";


function App(){

  const [characters, setCharacters] = useState([])

  useEffect(()=> {
    async function fetchData () {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      // const result = await fetch('https://dinosaur-facts-api.shultzlab.com/dinosaurs');
      const data = await result.json();
      setCharacters(data.results);
    };

    fetchData()

  }, [])

  return(
    <div>
      <h1>Rick & Morty</h1>

        <CharacterList/>
        <Characters/>
    </div>
  )
}
export default App