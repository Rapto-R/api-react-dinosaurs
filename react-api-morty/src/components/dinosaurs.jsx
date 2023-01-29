/** COMPONENTE DONDE PINTA LA CARD DEL PERSONAJE Y SUS CARACTERISTICAS **/

function Dinosaurs({dinosaurs}) {
    return(

        // <div className="card w-10">
        //     <div className="card-body">
        //         <h5 className="card-title text-dark text-center">{dinosaurs.Name}</h5>
        //         <h5 className="card-title text-dark text-center">{dinosaurs.Description}</h5>
        //     </div>
        // </div>

        <div className="card w-10">
            <img src="" className="card-img-top" alt={dinosaurs.Name} />
            <div className="card-body">
                <h5 className="card-title text-dark text-center">{dinosaurs.Name}</h5>
                <p className="card-text text-dark">Origen: {character.origin.name}</p>
                <p className="card-text text-dark">Locacion: {character.location.name}</p>
                <p className="card-text text-dark">Especie: {character.species}</p>
                <p className= {`${character.status == 'Alive' ? 'badge rounded-pill text-bg-success' : 'badge rounded-pill text-bg-danger'}`}>Estado: {character.status}</p>
            </div>
        </div>

    )
}

export default Dinosaurs
