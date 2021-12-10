import React from "react";
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='pokemon'>
        <img src={this.props.pokemon.image} alt='Pokemon' />
        <p>{this.props.pokemon.name}</p>
        <p>{this.props.pokemon.type}</p>
        <p>Average Weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
      </div>
    )
  }
}

export default Pokemon;