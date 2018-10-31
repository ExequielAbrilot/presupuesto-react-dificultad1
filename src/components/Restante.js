import React,{Component} from 'react';
import { revisarPresupuesto } from './../Helper'
import PropTypes from 'prop-types';

export default class Restante extends Component {

    render() {
        return (
            <div className={revisarPresupuesto(this.props.presupuesto, this.props.restante)}>
                Restante: ${this.props.restante}
            </div>
        );
    }
}

Restante.propTypes = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}