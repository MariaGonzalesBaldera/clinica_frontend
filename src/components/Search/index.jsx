import '../../styles/Search.css';
import logo from '../../img/hospital.png';
import lupa from '../../img/search.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faBone, faUserNurse, faTooth, faHeartPulse, faChildren, faEye } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

export default function Search() {

  const [search, setSearch] = useState("")
  const [users, setUsers] = useState([])

  const showData = () => setUsers(ListSpecialties)
  const seacher = (e) => setSearch(e.target.value)

  useEffect(() => { showData() }, [])

  const ListSpecialties = [
    { "id": 0, "name": "Doctor General", "code": faUserDoctor },
    { "id": 1, "name": "Ortopedista", "code": faBone },
    { "id": 2, "name": "Ginecología", "code": faUserNurse },
    { "id": 3, "name": "Dentista", "code": faTooth },
    { "id": 4, "name": "Cardiólogo", "code": faHeartPulse },
    { "id": 5, "name": "Pediatría", "code": faChildren },
    { "id": 6, "name": "Oftalmólogo", "code": faEye }
  ]

  const results = !search ? users : users.filter((dato) => dato.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))

  return (
    <>
      <div className='main-search'>
        <h2>Doctor consultas</h2>
        <img className='logo' src={logo} alt='logo' />
        <div className='search'>
          <div className='search-bar'>
            <input autoFocus value={search} onChange={seacher} type='text' className='input-search' placeholder='Medicina general, Dentista, Pediatra.. ' />
            <button><img className='img-lupa' src={lupa} alt='img-lupa' /></button>
          </div>
        </div>
      </div>
      <section className='section-specialties'>
        {results.length > 0 ? (
          <div className='main-specialties'>
            {results.map((specialty) => (
              <Link to={`/select/${specialty.name}`} key={specialty.id} className='specialties-items'>
                <div>
                  <FontAwesomeIcon className='ico-specialties' icon={specialty.code} style={{ color: "#4a7978", }} />
                  <p>{specialty.name}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className='div-sin-disponibilidad'>
            <p>Noy hay datos disponibles<br />
              Ingresa otro valor </p>
          </div>
        )}
      </section>
    </>
  )
}
