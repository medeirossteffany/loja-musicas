import '../css/NavStyle.css';
import logo from '../imgs/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav id="navbar">
            <div className="navbar-container">
                <img src={logo} alt="Logo UpMusic" className="logo-nav" />
                <ul className="navbar-items">
                    <li className="navbar-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/musica">Músicas</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
