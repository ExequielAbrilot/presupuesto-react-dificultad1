import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import {validarPresupuesto, revisarPresupuesto} from './Helper';
import ControlPresupuesto from './components/ControlPresupuesto';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      presupuesto: '',
      restante: '',
      gastos: {}
    }
  }

  componentDidMount(){
    this.obtenerPResupuesto();
  }

  obtenerPResupuesto(){
    let presupuesto = prompt('Cual es el presupuesto');
    let resultado = validarPresupuesto(presupuesto);
    if(!resultado){
      return this.obtenerPResupuesto();
    }

    this.setState({
      presupuesto,
      restante: presupuesto
    })
    
  }

  agregarGastos = (data)=>{
    let gastos = {...this.state.gastos};
    gastos[`gastos${Date.now()}`] = data;
    this.restarPresupuesto(data.cantidad);
    this.setState({
      gastos
    });
  }

  restarPresupuesto = ( monto )=>{
    let restante = this.state.restante;
    restante = restante - monto;

    this.setState({
      restante
    })

   
  }

  render() {
    return (
      <div className="App container">
        <Header titulo = 'Gasto Semanal'/>
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarGastos={this.agregarGastos}/>
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />
              <ControlPresupuesto presupuesto= {this.state.presupuesto} restante = {this.state.restante} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
