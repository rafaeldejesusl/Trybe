import React, { Component } from 'react'

export class Cpf extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        CPF: <input type="text" name="cpf" maxLength={11} required value={ value } onChange= {handleChange}></input>
      </label>
    )
  }
}

export default Cpf
