import React, { Component } from 'react';

import FormRow from './FormRow'

class Form extends Component{
  constructor(){
    super();

    this.state = {
      labelLegend: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    let nombre = this.refs.nombre.getValue();
    let apellido = this.refs.apellido.getValue();
    let correo = this.refs.correo.getValue();
    let password = this.refs.password.getValue();
    let confirm_password = this.refs.confirm_password.getValue();

    if(password === confirm_password){
      this.setState({labelLegend: 'login Exitoso'});
    }else{
      this.setState({labelLegend: 'los passwords no coinciden'});
    }
  }

  render(){
    return(
      <div>
        <h2>Registro</h2>
        <form onSubmit = {this.onSubmit}>
        <FormRow inputType="text" labelText ="Nombre" ref = "nombre" isRequired = {true}/>
        <FormRow inputType="text" labelText ="Apellido" ref = "apellido" isRequired = {true}/>
        <FormRow inputType="email" labelText ="Correo Electronico" ref = "correo" isRequired = {true}/>
        <FormRow inputType="password" labelText ="Password" ref = "password" isRequired = {true}/>
        <FormRow inputType="password" labelText ="Confirmar Password" ref = "confirm_password" isRequired = {true}/>
        <button>Registro</button>
        <label>{this.state.labelLegend}</label>
        </form>
      </div>
    );
  }
}

export default Form;
