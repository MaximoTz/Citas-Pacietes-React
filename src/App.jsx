import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useEffect, useState } from "react"


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})

  useEffect(() => {
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? []
      setPacientes(pacientesLS);
    }
    obtenerLS()
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes]);

  const eliminarPacientes = (id) =>{
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-12">
      <Header/>
      <div className="md:flex mt-12">
        <Formulario
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPacientes = {eliminarPacientes}
        />
      </div>
      
    </div>
  )
}

export default App
