import React, { Component } from 'react'

export class Endereco extends Component {
  render() {
    const { value, handleAddress } = this.props;

    return (
      <label>
        Endereço: <input type="text" name="endereco" maxLength={200} required value={ value } onChange= {handleAddress}></input>
      </label>
    )
  }
}

export default Endereco
