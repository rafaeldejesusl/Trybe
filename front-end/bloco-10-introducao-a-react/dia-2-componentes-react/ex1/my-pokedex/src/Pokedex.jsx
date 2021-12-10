import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (this.props.pokemons.map((pokemon, index) => <Pokemon pokemon={pokemon} key={index} />))
  }
}

export default Pokedex;