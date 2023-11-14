import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import '../../styles/DescriptionDoctor.css'
import { useEffect, useState } from 'react';
import { getDetailDoctor } from '../../api/api'
import PropTypes from 'prop-types';


export default function Description({addMensaje}) {
  let { id } = useParams();
  const [Doctor, setDoctor] = useState([])
  const [Idioms, setIdioms] = useState([])
  const [Mode, setMode] = useState([])

  useEffect(() => {
    async function loadSpecialty() {
      const res = await getDetailDoctor(id);
      setDoctor(res)
      setIdioms(res.idioms)
      setMode(res.mode)
      addMensaje("DESCRIPCIÓN DEL ESPECIALISTA")
    }
    loadSpecialty();
  }, []);

  return (
    <div className="div-main-description">
      <section className="section-description" key={Doctor.id}>
        <div className="div-description-primero">
          <section className='div-description-second'>
            <h2>Acerca de</h2>
            <b>Universidad</b>
            <div>
              {Doctor.university}
            </div>
            <b>Biografia</b>
            <div>
              {Doctor.description}
            </div>
          </section>
        </div>
        <div className='div-description-segundo'>
          <div className='div-description-enter'>
            <div className='div-head'>
              <img className='img-perfil' title='Foto Perfil' alt='Foto perfil' src={Doctor.photo} />
              <h2 className='user-name'>{Doctor.name}</h2>
              <hr />
            </div>
            <div className='div-speciality'>
              {Doctor.specialty}
            </div>
            <div className='div-descripton-principal-info'>
              <div className='btn-description-reservar'>
                Reservar
              </div>
            </div>
          </div>
        </div>
        <div className='div-description-tercero'>
          <h2>Detalles</h2>
          <b>Idiomas que domina:</b>
          <ul>
            {Object.entries(Idioms).map(([key, value]) => (
              <li key={key}><FontAwesomeIcon icon={faAngleUp} rotation={90} /> {value}
              </li>
            ))}
          </ul>
          <b>Consultas disponibles en: </b>
          <ul>
            {Object.entries(Mode).map(([key, value]) => (
              <li key={key}><FontAwesomeIcon icon={faAngleUp} rotation={90} /> {value}
              </li>
            ))}
          </ul>
          <b>Años de experiencia</b>
          <div className='div-years-e'>Cuento con {Doctor.years_experience} años de experiencia </div>
        </div>
      </section>
    </div>
  )
} 
Description.propTypes = {
  addMensaje: PropTypes.func.isRequired,
};