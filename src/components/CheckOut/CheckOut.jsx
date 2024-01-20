import { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import "./Checkout.css";

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "", telefono: "", email: "", emailRep: "",
    });

    const [idOrden, setIdOrden] = useState(null);
    const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);

    const guardarDatosInput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
    };

const enviarOrder = (event) => {
    event.preventDefault();
    if (datosForm.email === datosForm.emailRep){
        const orden = {
            comprador: { ...datosForm },
            productos: [...carrito],
            fecha: new Date(),
            total: totalPrecio(),
        };
    subirOrden(orden);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No coinciden los emails, por favor intente nuevamente",
        });
    }
};

    const subirOrden = (orden) => {
        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, orden).then((respuesta) => {
            setIdOrden(respuesta.id)
            borrarCarrito()
        });
    };

    return (
        <div>
            {idOrden ? (
                <div className="ordenGenerada">
                    <h2>Orden Generada correctamente!!</h2>
                    <p className="nrOrden">N° de orden: {idOrden} </p>
                </div>
            ) : (
                <Form
                datosForm={datosForm}
                guardarDatosInput={guardarDatosInput}
                enviarOrder={enviarOrder}
                />
            )}
        </div>
    );
};

export default Checkout;