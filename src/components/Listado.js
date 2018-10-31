import React from 'react';
import Gastos from './Gastos';
import PropTypes from 'prop-types';

export class Listado extends React.Component{
    render(){
        return(
            <div className="gastos-realizados">
                <h2> Listado </h2>
                {Object.keys(this.props.gastos).map(key=>(
                    <Gastos key={key} gasto = {this.props.gastos[key]} />
                ))}                
            </div>
        )
    }
}

export default Listado;

Listado.propTypes = {
    gastos: PropTypes.object.isRequired
}