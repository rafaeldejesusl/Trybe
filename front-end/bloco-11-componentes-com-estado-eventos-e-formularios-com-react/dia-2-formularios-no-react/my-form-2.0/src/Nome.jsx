import React, { Component } from 'react'

export class Nome extends Component {

  render() {
    const { value, handleName } = this.props;

    return (
      <label>
        Nome: <input type="text" name="nome" maxLength={40} required value={ value } onChange= {handleName}></input>
      </label>
    )
  }
}

export default Nome
