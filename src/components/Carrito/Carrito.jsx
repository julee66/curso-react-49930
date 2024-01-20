import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Carrito.css";

const Carrito = () => {

    const { carrito, borrarCarrito, borrarProducto, totalPrecio } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="sinProductos">
                <h2> El carrito esta vacio</h2>
                <Link to="/">Inicio </Link>
            </div>
        );
    }

    return (
        <div className="carrito">
            <ul className="productos">
                {carrito.map((producto) => (
                    <li className="producto" key={producto.id}>
                        <img className="imagen" src={producto.imagen} alt={producto.nombre}/>
                        <p className="detalle">{producto.nombre}</p>
                        <p className="detalle"> Cantidad: {producto.cantidad}</p>
                        <p className="detalle"> Precio: ${producto.precio}</p>
                        <button className="eliminar" onClick={() => borrarProducto(producto.id)}>Eliminar</button> 
                    </li>
                ))}
            </ul>
            <h3>Total: ${totalPrecio()}</h3>
            <div onClick={borrarCarrito}>
                <p className="botonVaciar">Vaciar Carrito</p>
            </div>
            <Link className="boton" to="/checkout">Comprar</Link>
        </div>
    );
};

export default Carrito;