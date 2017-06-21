import React, { Component } from 'react';
import pokedex from './pokedex.png'
import './PokemonInfo.css'

class PokemonInfo extends Component {
  state = {
    error: false,
    pokemon: {
      sprites: {
        front_default: '',
      },
      height: 0,
      weight: 0,
      name: '',
      types: [], 
      abilities: [],
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
      .then(pokemon => 
      {
        if (pokemon.detail !== 'Not found.') 
        {
          pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          // console.log(pokemon.types.map((currentType) => currentType.type.name))

          console.log(pokemon);
          this.setState({ error: false});
          this.setState({ pokemon });
        } else {  
          this.setState({ error: true });
        }
      })
  }


  render() {
    const { pokemon } = this.state;
    return (
      <div>
        {this.state.error ? 
        <h3>Pokemon not found</h3>
        :
        <div>
          <img id="pokedex" src={pokedex} alt={pokedex}/>
          <img id="pokemon-sprite" src={pokemon.sprites["front_default"]} alt="pokemon sprite"/>
          <div id="name">{pokemon.name}</div>
          <div id="ht-wt">
            <div className="bottom-margin">HT: <br/>{(pokemon.height/3).toFixed(1)}ft</div>
            <div>WT: <br/>{(pokemon.weight/4.5).toFixed(1)}lb</div>
          </div>
          <div id="general-info">
            <div id="type">Type: <br/>
              {pokemon.types.map(
                (currentType, i) => {
                  if (i !== pokemon.types.length - 1)
                    return currentType.type.name + ", "
                  else 
                    return currentType.type.name
                })
              }
            </div>
            <div>Abilities: <br/>
              {pokemon.abilities.map(
                (currentType, i) => {
                  if (i !== pokemon.abilities.length - 1)
                    return currentType.ability.name + ", "
                  else 
                    return currentType.ability.name
                })
              }
            </div>
          </div>
        </div>
        }

      </div>
    );
  }
}

export default PokemonInfo;