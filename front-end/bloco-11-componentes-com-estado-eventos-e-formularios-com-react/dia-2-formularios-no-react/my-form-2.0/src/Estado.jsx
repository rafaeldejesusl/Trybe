import React, { Component } from 'react'

export class Estado extends Component {
  render() {
    const { value, handleChange } = this.props;
    const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    return (
      <label>
        Estado:  <select type="select" name="estado" required value={ value } onChange= {handleChange}>
          {estados.map(element => <option key={element} value={element}>{element}</option>)}
        </select>
        
      </label>
    )
  }
}

export default Estado
