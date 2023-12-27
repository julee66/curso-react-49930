import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import obtenerProductos from "../utilities/data";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = ({}) => {

const [productos, setProductos] = useState([]);
const { categoria } = useParams()

useEffect(() => {
    obtenerProductos
        .then((respuesta) => {
            if(categoria){
                const productosFiltrados = respuesta.filter((producto) => producto.categoria === categoria)
                setProductos(productosFiltrados)
            } else {
                setProductos(respuesta);
            }
        })
}, [categoria]);

    return (
        <div className="itemListContainer">
            <ItemList productos= {productos} />
        </div>
    )
}

export default ItemListContainer