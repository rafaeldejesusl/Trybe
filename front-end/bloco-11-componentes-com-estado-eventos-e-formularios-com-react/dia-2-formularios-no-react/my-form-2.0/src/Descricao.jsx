import React, { Component } from 'react'

export class Descricao extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Descrição: <input type="text" name="descricao" maxLength={500} required value={ value } onChange= {handleChange}></input>
      </label>
    )
  }
}

export default Descricao
