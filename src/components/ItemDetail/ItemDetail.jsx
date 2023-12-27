
import "./ItemDetail.css";

const ItemDetail = ( {producto} ) => {

    return (
        <div className="itemDetail">
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.nombre}</p>
            <p className="precio"> $ {producto.precio} </p>
            <p> {producto.detalle} </p>
            <p>Stock: {producto.stock}</p>
        </div>
    );
}

export default ItemDetail