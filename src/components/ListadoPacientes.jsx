import Pacientes from "./Pacientes"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPacientes}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mx-auto">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="text-center font-black text-2xl mb-5">
                        Listado Pacientes
                    </h2>
                    <p className="text-center text-md mb-8">
                        Administra tus <span className="text-indigo-600 font-semibold">Pacientes y Citas</span>
                    </p>

                    {pacientes.map( paciente => (
                        <Pacientes
                            key={paciente.id}
                            paciente = {paciente}
                            setPaciente = {setPaciente}
                            eliminarPacientes = {eliminarPacientes}
                        />
                    ))}

                </>
            ): (
                <>
                    <h2 className="text-center font-black text-2xl mb-5">
                        No hay Pacientes
                    </h2>
                    <p className="text-center text-md mb-8">
                        Comienza agregando pacientes y <span className="text-indigo-600 font-semibold">aparecerán en este lugar</span>
                    </p>
                </>
            )}

            
            
        </div>
    )
}

export default ListadoPacientes