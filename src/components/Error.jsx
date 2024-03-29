import PropTypes from 'prop-types';

const Error = ({children}) => {
  return (
    <div className=' bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
    <p>{children}</p>
    </div>
  )
}

Error.propTypes = {
    children: PropTypes.any.isRequired
};
  
export default Error
