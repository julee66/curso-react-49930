import CarWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div id="navbar">
            <Link to="/" className="logo">FitLife</Link>
            <ul>
                <li>
                    <Link to="/categoria/pollera">Pollera</Link>
                </li>
                <li>
                    <Link to="/categoria/calza">Calza</Link>
                </li>
                <li>
                    <Link to="/categoria/buzo">Buzo</Link>
                </li>
                <li>
                    <Link to="/categoria/top">Top</Link>
                </li>
                <li>
                    <Link to="/categoria/colchoneta">Colchoneta</Link>
                </li>
                <li>
                    <Link to="/categoria/elastico">Elastico</Link>
                </li>
                <li>
                    <Link to="/categoria/tobillera">Tobillera</Link>
                </li>
                <li>
                    <Link to="/categoria/mancuerna">Mancuerna</Link>
                </li>
            </ul>
            <CarWidget />
        </div>
    )
};

export default NavBar;