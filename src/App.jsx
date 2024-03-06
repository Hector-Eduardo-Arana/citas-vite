import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from 'react';


function App() {
  //verifica si hay algo en el local storage si si lo asigna a setpacientes ya sea el objeto o un []
  const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? []; //convierte de string a objeto
  const[pacientes, setPacientes]=useState(INITIAL);
  const [paciente, setPaciente] = useState({});

  //si hay cambios en pacientes, insertara dicho objeto del cambio en localstorage
  useEffect(()=> {
    localStorage.setItem('pacientes', JSON.stringify( pacientes )); //convierte de objeto a string
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
      <div className="container mx-auto mt-20 ">
           <Header />
        <div className=" mt-12 md:flex">
          <Formulario 
            pacientes = {pacientes}
            setPacientes = {setPacientes}
            paciente = {paciente}
            setPaciente = {setPaciente}
          />
          <ListadoPacientes
            pacientes = {pacientes}
            setPaciente={setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
        </div>
      </div>
  )
}

export default App
