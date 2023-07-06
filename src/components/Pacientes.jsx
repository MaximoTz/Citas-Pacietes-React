const Pacientes = ({paciente, setPaciente, eliminarPacientes}) => {

    const {nombre, terapia, celular, cita, detalles, id} = paciente

    const handleEliminar = () =>{
        const respuesta = confirm("Desea eliminar al paciente?")
        if(respuesta){
            eliminarPacientes(id)
        }
    }


    return (
        <div className="bg-white rounded-xl shadow-xl px-5 py-10 mx-5 mb-10">
            <p className="uppercase font-semibold text-indigo-800 mb-2">
                Nombre: <span className="normal-case font-normal text-black">{nombre}</span>
            </p>
            <p className="uppercase font-semibold text-indigo-800 mb-2">
                Terapia: <span className="normal-case font-normal text-black">{terapia}</span>
            </p>
            <p className="uppercase font-semibold text-indigo-800 mb-2">
                Celular: <span className="normal-case font-normal text-black">{celular}</span>
            </p>
            <p className="uppercase font-semibold text-indigo-800 mb-2">
                Cita: <span className="normal-case font-normal text-black">{cita}</span>
            </p>
            <p className="uppercase font-semibold text-indigo-800 mb-2">
                Detalles de la Terapia: <span className="normal-case font-normal text-black">{detalles}</span>
            </p>
            <div className="flex justify-between flex-wrap">
                <button 
                    className="bg-indigo-600 rounded-md py-2 px-10 mt-3
                    text-white hover:bg-indigo-800 transition-all"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button 
                    className="bg-red-600 rounded-md py-2 px-10 mt-3
                    text-white hover:bg-red-800 transition-all"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Pacientes