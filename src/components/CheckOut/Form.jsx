const Form = ({ datosForm, guardarDatosInput, enviarOrder }) => {

    return (
        <form className="form" onSubmit={enviarOrder} >
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} required/>
            <label htmlFor="telefono">Telefono</label>
            <input type="text" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} required/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} required/>
            <label htmlFor="emailRep">Repetir Email</label>
            <input type="email" id="emailRep" name="emailRep" value={datosForm.emailRep} onChange={guardarDatosInput} required/>
            <button className="boton" type="submit">Enviar orden</button>
        </form>
    )
}

export default Form