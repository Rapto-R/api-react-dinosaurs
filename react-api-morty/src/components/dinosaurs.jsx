/** COMPONENTE DONDE PINTA LA CARD DE CADA DINOSAURIOS Y SU DESCRIPCION **/

function Dinosaurs({dinosaurs}) {
    return(

        <div className="card">
            <img src="./src/img/fossil.png" className="card-img-top" alt={dinosaurs.Name} />
            <div className="card-body">
                <h5 className="card-title text-dark text-center">{dinosaurs.Name}</h5>
                <p className="card-text text-dark">Descripcion: {dinosaurs.Description}</p>
            </div>
        </div>

    )
}

export default Dinosaurs
