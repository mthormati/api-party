import React, { Component } from 'react';
import pokedex from './pokedex.png'
import './PokemonInfo.css'

class PokemonInfo extends Component {
  state = {
    pokemon: {
      sprites: {
        front_default: '',
      },
      height: 0,
      weight: 0,
    }
  }

  constructor(props) {
    super(props);
    
    this.fetchPokemonData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location;
    if (locationChanged) {
      this.fetchPokemonData(nextProps);
    }
  }
  
  fetchPokemonData(props) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.pokeName}/`)
      .then(response => response.json())
      .then(pokemon => {
        if (pokemon.detail !== 'Not found.') 
        {
          console.log(pokemon);
          this.setState({ pokemon });
        }
      })
  }


  render() {
    const { pokemon } = this.state;
    return (
      <div>
        <img id="pokedex" src={pokedex} alt={pokedex}/>
        <img id="pokemon-sprite" src={pokemon.sprites["front_default"]} alt="pokemon sprite"/>
        <div id="ht-wt">
          <div id="absolute" className="bottom-margin">HT: <br/>{(pokemon.height/3).toFixed(1)}ft</div>
          <div id="absolute">WT: <br/>{(pokemon.weight/4.5).toFixed(1)}lb</div>
        </div>
      </div>
    );
  }
}

export default PokemonInfo;