import PropTypes from 'prop-types';


const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar este paciente?');

    if(respuesta){
      eliminarPaciente(id)
    }
  }
  const fechaObjeto = new Date(fecha);
  const dia = fechaObjeto.getDate();
  const mes = fechaObjeto.toLocaleString('default', { month: 'long' }); // Obtén el nombre del mes
  const anio = fechaObjeto.getFullYear();

  const fechaFormateada = `${dia} de ${mes} del ${anio}`;

  return (
    <div className="mx-5 bg-mx-5 bg-gradient-to-br from-gray-100 via-gray-100 to-emerald-100 overflow-hidden shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Correo: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">{fechaFormateada}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className='flex flex-col w-full md:flex-row md:justify-between'>
          <button 
          type='button'
          className="w-full py-2 px-10 bg-indigo-600 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
          >
          Editar
          </button>
          <button 
          type='button'
          className='w-full mt-4 md:mt-0 ml-0 md:ml-2 lg:ml-5 py-2 px-10 bg-red-600 hover:bg-red-900 text-white font-bold uppercase rounded-lg'
          onClick={handleEliminar}
          >
          Eliminar
          </button>
        </div>
      </div>
  )
}

Paciente.propTypes = {
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.any,
  eliminarPaciente: PropTypes.any
}
export default Paciente
