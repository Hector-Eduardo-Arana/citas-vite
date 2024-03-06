import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';


import Error from './Error';

const Formulario = ( {pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  
  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //validacion del formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true);
      return;
    }
    setError(false);

    //objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
      
    }

    if(paciente.id){
      //Editando el registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteUpdate => pacienteUpdate.id === paciente.id ?
      objetoPaciente : pacienteUpdate )
        
      setPacientes(pacientesActualizados) 
      setPaciente({})
      
    }else{
      //nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente])//spray operator
    }

    //reiniciar el form
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('')
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-emerald-300 font-bold">Administralos</span>
      </p>
      <form
      onSubmit={handleSubmit} 
      className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 mx-5">
        {error && <Error><p>Todos los campos son obligatorios</p></Error>}  
        <div className="mb-5">
            <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
              Nombre Paciente
            </label>
            <input
              id="nombre"
              type="text"
              placeholder="Nombre del paciente"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={ (e) => setNombre(e.target.value) }
            />
        </div>
        <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
              Nombre Propietario
            </label>
            <input
              id="propietario"
              type="text"
              placeholder="Nombre del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={ (e) => setPropietario(e.target.value) }
            />
        </div>
        <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Correo
            </label>
            <input
              id="email"
              type="email"
              placeholder="Correo del contacto"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />
        </div>
        <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
              Alta
            </label>
            <input
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={ (e) => setFecha(e.target.value) }
            />
        </div>
        <div className="mb-5">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
              Síntomas
            </label>
            <textarea 
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="describe los sintomas"
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value) }
            />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-indigo-800"
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

Formulario.propTypes = {
  pacientes: PropTypes.any.isRequired,
  setPacientes: PropTypes.any.isRequired,
  paciente: PropTypes.any.isRequired,
  setPaciente: PropTypes.any.isRequired
};

export default Formulario

