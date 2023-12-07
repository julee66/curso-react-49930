import CarWidget from "./CartWidget";
import "./NavBar.css";


const NavBar = () => {
    return (
        <div id="navbar">
            <h1>FitLife</h1>
            <ul>
                <li>
                    <a href="#">Ropa Deportiva</a>
                </li>
                <li>
                    <a href="#">Accesorios de Gimnasia</a>
                </li>
            </ul>
            <CarWidget />
        </div>
    )
};

export default NavBar;