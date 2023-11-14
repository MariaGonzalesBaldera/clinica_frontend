import '../../styles/SearchMap.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import MapContainers from '../MapContainers';
import { useParams } from 'react-router-dom';
import { getDoctorSpecialty } from '../../api/api'
import PropTypes from 'prop-types';
import Cargando from '../Cargando';
import { getDateNow } from '../../utils'

export default function SearchMap({ addMensaje }) {
  let { specialty } = useParams();
  const [positions, setPositions] = useState([-12.045955, -77.030550])
  const [users, setUsers] = useState([])
  const [selectedMode, setSelectedMode] = useState('Clínica');

  useEffect(() => {
    async function showData() {
      const filteredUsers = await getDoctorSpecialty(specialty, selectedMode);
      setUsers(filteredUsers);
      addMensaje(filteredUsers.length)
    }
    showData();

  }, [selectedMode])

  const handleChange = (e) => {
    setSelectedMode(e.target.value);

  };

  const handleMouseEnter = (e) => {
    const eventContainer = e.target.classList.contains('link-description')
    if (!eventContainer) {
      e.stopPropagation();
    } else {
      users.filter(user => user["id"] == e.target.id).map(user => {
        setPositions(user["url_map"])
      })
    }
  };
  return (
    <section className="section-map">
      <div className='div-list' >

        {/* inicio radio /> */}

        <div className="form-group-mode">
          <span className="opcion-radio">
            <input type="radio" id="Domicilio-clinica" name="type-of-mode" value="Clínica"
              checked={selectedMode == "Clínica"}
              onChange={handleChange} />
            <label htmlFor="Domicilio-clinica">Domicilio/Clinica</label>
          </span>
          <span className="opcion-radio">
            <input type="radio" id="Videoconsulta" name="type-of-mode" value="Videoconsulta"
              checked={selectedMode == "Videoconsulta"}
              onChange={handleChange} />
            <label htmlFor="Videoconsulta">Video Consulta</label>
          </span>
        </div>
        {/* fin radio /> */}
        {users.length > 0 ? (
          users.map((user) => (
            <Link to={`/description/${user.specialty}/${user.id}`} className='link-description' key={user.id} onMouseEnter={handleMouseEnter} id={user.id}>
              <div className='div-list-item'>
                <div className='text-name'> Dr. {user.name}
                  <p className='text-type'></p>
                  <img src={user.photo} alt='foto de perfil' />
                </div>
                <div className='text-description'>
                  <div className='div-price'>S/. {user.price}</div>
                  <div className='div-description-doctor'>
                    20.9km de ti.<br />
                    {user.idioms.map((lan, index) => (
                      <li key={index}>{lan}</li>
                    ))}
                    {user["years_experience"]} años de experiencia
                  </div>
                </div>
                <div className='div-days'>
                  <div className='div-days-item'>
                  HOY
                  </div>
                  <div className='div-days-item'>{getDateNow(1)}</div>
                  <div className='div-days-item'>{getDateNow(2)}</div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <Cargando />
        )

        }
      </div>
      <div className='div-map'>
        <MapContainers positions={positions} />
      </div>
    </section>

  )
}
SearchMap.propTypes = {
  addMensaje: PropTypes.func.isRequired,
};