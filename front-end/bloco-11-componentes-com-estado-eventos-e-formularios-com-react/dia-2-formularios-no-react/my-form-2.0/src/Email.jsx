import React, { Component } from 'react'

export class Email extends Component {

  render() {
    const { value, handleChange } = this.props;
    
    return (
      <label>
        Email: <input type="text" name="email" maxLength={50} required value={ value } onChange= {handleChange}></input>
      </label>
    )
  }
}

export default Email
