import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < stock) {
        setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 1) {
        setContador(contador - 1);
        }
    };

    return (
        <div className="itemCount">
            <div className="sumaResta">
                <button className="botonSumaResta" onClick={restar}>-</button>
                <p>{contador}</p>
                <button className="botonSumaResta" onClick={sumar}>+</button>
            </div>
            <button className="boton" onClick={() => agregarAlCarrito(contador)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;