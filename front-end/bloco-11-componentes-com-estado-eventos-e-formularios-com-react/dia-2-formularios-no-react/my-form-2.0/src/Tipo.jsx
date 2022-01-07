import React, { Component } from 'react'

export class Tipo extends Component {
  render() {
    const { handleChange } = this.props;
    
    return (
    <>
      <label htmlFor='casa'>Casa</label>
      <input type='radio' id='casa' name='tipo' value='Casa' required onChange={handleChange}/>
      <label htmlFor='apartamento'>Apartamento</label>
      <input type='radio' id='apartamento' name='tipo' value='Apartamento' onChange={handleChange}/>
    </>
    )
  }
}

export default Tipo
