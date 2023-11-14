import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import data from '../../archivo.json';
import '../../styles/DescriptionDoctor.css'


export default function Description() {
  let { id } = useParams();

  data.filter(user => user["id"] == id).map(user => user)

  const filteredData = data.filter(user => user["id"] == id).map(user => user)

  return (
    <div className="div-main-description">
      {filteredData.map((user) => (
        <section className="section-description" key={user.id}>
          <div className="div-description-primero">
            <section className='div-description-second'>
              <h2>Acerca de </h2>
              <b>Universidad </b>
              <div>
                {user.university}
              </div>
              <b>Biografia</b>
              <div>
                {user.description}
              </div>
            </section>
          </div>
          <div className='div-description-segundo'>
            <div className='div-description-enter'>
              <div className='div-head'>
                <img className='img-perfil' src={user.photo} />
                <h2 className='user-name'>{user.name}</h2>
                <hr />
              </div>
              <div className='div-speciality'>
                {user.speciality}
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
                {Object.entries(user.idioms).map(([key, value]) => (
                  <li key={key}><FontAwesomeIcon icon={faAngleUp} rotation={90} /> {value}</li>
                ))}
              </ul>
            <b>Consultas disponibles en: </b>
            <ul>
                {Object.entries(user.mode).map(([key, value]) => (
                  <li key={key}><FontAwesomeIcon icon={faAngleUp} rotation={90} /> { value }
                  </li>
                ))}
              </ul>
            <b>Años de experiencia</b>
            <div>Cuento con {user["years-experience"]} años de experiencia </div>
          </div>
        </section>
      ))}
    </div>
  )
} 