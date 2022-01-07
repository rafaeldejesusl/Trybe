import React, { Component } from 'react'

export class Cidade extends Component {

  render() {
    const { value, handleChange, cityCheck } = this.props;

    return (
      <label>
        Cidade: <input type="text" name="cidade" maxLength={28} required value={ value } onChange= {handleChange} onBlur={cityCheck}></input>
      </label>
    )
  }
}

export default Cidade
