import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState("")
    const [terapia, setTerapia] = useState("")
    const [celular, setCelular] = useState("")
    const [cita, setCita] = useState("")
    const [detalles, setDetalles] = useState("")

    const [error, setError] = useState(false)

    useEffect(() => {
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setTerapia(paciente.terapia)
            setCelular(paciente.celular)
            setCita(paciente.cita)
            setDetalles(paciente.detalles)
        }
    }, [paciente]);

    const generarId = () =>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }


    const handleSubmit = e =>{
        e.preventDefault();

        if([nombre, terapia, celular, cita, detalles].includes("")){
            setError(true);
            return;
        } 
        setError(false)

        const objetoPacientes = {
            nombre,
            terapia,
            celular,
            cita,
            detalles
        }

        if(paciente.id){
            objetoPacientes.id = paciente.id
            const actualizarPaciente = pacientes.map(pacienteState => objetoPacientes.id === paciente.id ? objetoPacientes : pacienteState);
            setPacientes(actualizarPaciente);
            setPaciente({})

        }else{
            objetoPacientes.id = generarId() 
            setPacientes([...pacientes, objetoPacientes])
        }

        setNombre("")
        setTerapia("")
        setCelular("")
        setCita("")
        setDetalles("")
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="text-center font-black text-2xl mb-5">
                Seguimiento Paciente
            </h2>
            <p className="text-center text-md mb-8">
                Añade Pacientes y <span className="text-indigo-600 font-semibold">Adminstralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl px-5 py-10 mx-5 mb-10">

                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div>
                    <label htmlFor="nombre" className="block uppercase font-bold mb-2">Nombre Paciente</label>
                    <input 
                        type="text" 
                        placeholder="Nombre del Paciente" 
                        id="nombre" 
                        className="border-2 w-full p-2 mb-5"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="terapia" className="block uppercase font-bold mb-2">Terapia</label>
                    <input 
                        type="text" 
                        placeholder="Terapía por realizar" 
                        id="terapia" 
                        className="border-2 w-full p-2 mb-5"
                        value={terapia}
                        onChange={e => setTerapia(e.target.value)}    
                    />
                </div>
                <div>
                    <label htmlFor="celular" className="block uppercase font-bold mb-2">Celular</label>
                    <input 
                        type="number" 
                        placeholder="Contacto Paciente" 
                        id="celular" 
                        className="border-2 w-full p-2 mb-5"
                        value={celular}
                        onChange={e => setCelular(e.target.value)}    
                    />
                </div>
                <div>
                    <label htmlFor="cita" className="block uppercase font-bold mb-2">Cita</label>
                    <input 
                        type="date" 
                        id="cita" 
                        className="border-2 w-full p-2 mb-5"
                        value={cita}
                        onChange={e => setCita(e.target.value)}    
                    />
                </div>
                <div>
                    <label htmlFor="detalles" className="block uppercase font-bold mb-2">Detalles de la terapia</label>
                    <textarea 
                        id="detalles" 
                        className="border-2 w-full p-2 mb-5"
                        value={detalles}
                        onChange={e => setDetalles(e.target.value)}
                    />
                </div>
                <input 
                    type="submit" 
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                    className="bg-indigo-600 text-white font-semibold uppercase 
                    w-full rounded-md hover:bg-indigo-800 transition-all text-center p-2 cursor-pointer"    
                />
            </form>
        </div>
    )
}

export default Formulario