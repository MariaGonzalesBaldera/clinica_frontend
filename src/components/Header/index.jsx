import '../../styles/Header.css';
import logo from '../../img/hospital.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header({titulo , mensaje}){
  return(
    <nav className="main-nav-Specialties">
      <div className='div-logo'><Link to={"/"}>
        <img className='img-logo' src={logo} alt='logo'/></Link>
      </div>
      <div className='div-descripcion'>
        <p className='text-doctor'>{titulo}</p>
        <p className='text-disponibles'>{mensaje}</p>
      </div>
      <div>CONFIGURACIÓN</div>
    </nav>
  )
}
Header.propTypes = {
  titulo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired  
};
