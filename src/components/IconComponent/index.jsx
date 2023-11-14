import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor, faBone, faUserNurse, faTooth, faHeartPulse, faChildren, faEye } from '@fortawesome/free-solid-svg-icons'

export default function IconComponent({ specialty }) {
  const arrayIco = { 1: faUserDoctor, 2: faBone, 3: faUserNurse, 4: faTooth, 5: faHeartPulse, 6: faChildren, 7: faEye }

  return (
    <>
      <FontAwesomeIcon icon={arrayIco[specialty["id"]]} className='ico-specialties' style={{ color: "#4a7978" }} />
      <p>{specialty["name"]}</p>
    </>
  );

}
IconComponent.propTypes = {
  specialty: PropTypes.object.isRequired,
};
