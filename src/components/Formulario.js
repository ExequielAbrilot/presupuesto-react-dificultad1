import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();
    // Crear Las referencias o los binding
   

    crearGastos = (e)=> {
        // Prevenir url default, ademas se usa la funcion de flecha para acceder bien
        // a la propiedad this!
        e.preventDefault();
        // Crear Objeto con los datos
        const infoGastos = {
            nombreGasto: this.nombreGastoRef.current.value,
            cantidad: this.cantidadGastoRef.current.value,
        }
        // Agregarlo y enviarlo por props
        this.props.agregarGastos(infoGastos);
        // reset formulario
        e.currentTarget.reset()
        
    }

    render(){
        return(
            <form onSubmit={this.crearGastos} >
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref = {this.nombreGastoRef} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref = {this.cantidadGastoRef} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
} 

Formulario.propTypes = {
    agregarGastos: PropTypes.func.isRequired
}

export default Formulario
