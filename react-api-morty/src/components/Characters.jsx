/** COMPONENTE DONDE PINTA LA CARD DEL PERSONAJE Y SUS CARACTERISTICAS **/

function Character({character}) {
    return(

        <div className="card">
                <img src={character.image} className="card-img-top" alt={character.name} />
            <div className="card-body">
                <h5 className="card-title text-dark text-center">{character.name}</h5>
                <p className="card-text text-dark">Origen: {character.origin.name}</p>
                <p className="card-text text-dark">Locacion: {character.location.name}</p>
                <p className="card-text text-dark">Especie: {character.species}</p>
                <p className= {`${character.status == 'Alive' ? 'badge rounded-pill text-bg-success' : 'badge rounded-pill text-bg-danger'}`}>Estado: {character.status}</p>
            </div>
        </div>

    )
}

export default Character
