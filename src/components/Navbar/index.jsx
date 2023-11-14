import '../../styles/Navbar.css';
import menu from '../../img/hamburger.png';

export default function Navbar() {
  const pulsar = () => {
    const mainMenuElement = document.getElementById('main-menu');
    mainMenuElement.classList.toggle('main-menu--show');
  };
  return (
    <>
    <nav className="main-nav">
      <div id="toggle-menu" className="toggle-menu" onClick={() => { pulsar() }}>
        <img src={menu} alt="menu" />
      </div>
      <ul id="main-menu" className="main-menu">
        <li className="main-menu__item">
          <a href="#" className="main-menu__link">Inicio</a>
        </li>
        <li className="main-menu__item">
          <a href="#" className="main-menu__link">Acerca de nosotros</a>
        </li>
        <li className="main-menu__item">
          <a href="#" className="main-menu__link">Chat</a>
        </li>
        <li className="main-menu__item">
          <a href="#" className="main-menu__link">Configuración</a>
        </li>
      </ul>
    </nav>

    </>

  )
}