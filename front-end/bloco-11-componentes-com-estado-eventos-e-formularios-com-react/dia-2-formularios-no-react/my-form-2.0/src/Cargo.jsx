import React, { Component } from 'react'

export class Cargo extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.handleMouse = this.handleMouse.bind(this);
  }

  handleMouse() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }), () => {if (this.state.counter === 1) alert('Preencha com cuidado esta informação.'); })
  }

  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Cargo: <textarea name="cargo" maxLength={40} required value={ value } onChange= {handleChange} onMouseEnter={this.handleMouse}></textarea>
      </label>
    )
  }
}

export default Cargo
