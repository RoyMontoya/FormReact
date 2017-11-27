import React, { Component } from 'react';

import FormRow from './FormRow'

class Form extends Component{

  render(){
    return(
      <div>
        <h2>Registro</h2>
        <FormRow inputType="text" labelText ="Nombre"/>
        <FormRow inputType="text" labelText ="Apellido"/>
        <FormRow inputType="email" labelText ="Correo Electronico"/>
        <FormRow inputType="password" labelText ="Password"/>
        <FormRow inputType="password" labelText ="Confirmar Password"/>
      </div>
    );
  }
}

export default Form;
