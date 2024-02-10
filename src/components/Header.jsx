
import logo from '../images/harry-potter-logo.png';

import '../scss/App.scss';


function Header() {
  return (
    <header className="header">
        <img src={logo} alt='Harry Potter' className="header_logo"/>
        <h1 className="header_title">Lista de personajes de Harry Potter</h1>
    </header>
  )
}

export default Header