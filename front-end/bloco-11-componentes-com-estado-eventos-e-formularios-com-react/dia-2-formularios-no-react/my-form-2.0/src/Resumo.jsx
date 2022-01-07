import React, { Component } from 'react'

export class Resumo extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Resumo do currículo: <textarea name="resumo" maxLength={1000} required value={ value } onChange= {handleChange}></textarea>
      </label>
    )
  }
}

export default Resumo
