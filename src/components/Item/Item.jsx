import { Link } from "react-router-dom";
import "./Item.css";

const Item = ( {producto} ) => {

    return (
        <div className="item">
            <img className="imagen" src={producto.imagen} alt={producto.nombre} />
            <p> {producto.nombre} </p>
        <Link className="boton" to={`/detalle/${producto.id}`}>Ver Detalle</Link>
        </div>
    );
}

export default Item