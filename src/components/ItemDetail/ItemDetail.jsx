import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
    const [toggle, setToggle] = useState(false);
    const { añadirProducto } = useContext(CartContext)
    const agregarAlCarrito = (contador) => {
        const productoNuevo = {...producto, cantidad: contador }
        añadirProducto(productoNuevo)
        setToggle(true);
    };

    return (
        <div className="itemDetail">
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
            <p className="precio"> $ {producto.precio} </p>
            <p> {producto.detalle} </p>
            <p>Stock: {producto.stock}</p>
            
            {toggle ? (
                <>
                    <Link className="boton" to="/carrito">Ir al Carrito</Link>
                    <Link className="boton" to="/">Seguir Comprando</Link>
                </>
            ) : (
                <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>
            )}
        </div>
    );
}

export default ItemDetail