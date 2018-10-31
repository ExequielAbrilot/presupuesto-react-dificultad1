import React from 'react';
import PropTypes from 'prop-types';

export class Gastos extends React.Component{
    render(){
        const { nombreGasto, cantidad} = this.props.gasto;
        return(
            <li className="gastos">
                <p>
                    {nombreGasto}
                    <span className="gasto">$ {cantidad}</span>
                </p>
                
            </li>
        )
    }
}

export default Gastos;

Gastos.propTypes = {
    gastos: PropTypes.object.isRequired
}