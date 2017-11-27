import React, { Component } from 'react';

import PropTypes from 'prop-types'

class FormRow extends Component{
  constructor(props){
    super(props);


      this.onChange = this.onChange.bind(this);
      this.getValue = this.getValue.bind(this);
      this.state = {
        inputValue: ''
      }
  }

  onChange(e){
    this.setState({inputValue:e.target.value});
  }

  getValue(){
    return this.state.inputValue;
  }

  render(){
    return(
      <div>
        <label>{this.props.labelText}</label>
        <input
          type = {this.props.inputType}
          value = {this.state.inputValue}
          isRequired = {this.props.isRequired}
        onChange = {this.onChange}/>
      </div>
    );
  }
}

FormRow.propTypes = {
  inputType: PropTypes.string,
  labelText: PropTypes.string,
  isRequired: PropTypes.bool
}

export default FormRow;
