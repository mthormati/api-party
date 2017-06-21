import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PokemonInfo from './PokemonInfo'
import './Pokemon.css';

class Pokemon extends Component {
  state = {
    pokeName: '',
  }

  handleChange = (e) => {
    const pokeName = e.currentTarget.value.toLowerCase();
    this.setState({ pokeName });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/pokemon/${this.state.pokeName}`);
    this.pageScroll();
  }

  pageScroll() {
    window.scrollBy(0,1000);
  }

  render() {
    return (
      <div className="pokemon">
        <img className="pokemon-logo" src="https://goo.gl/hEBmYj" alt="pokemon logo" />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
              type="text"
              value={this.state.pokeName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up Pokemon</button>
          </div>
        </form>

        <Route exact path='/pokemon' render={() => <h3>Please enter the name of a Pokemon</h3>}/>
        <Route path='/pokemon/:pokeName' component={PokemonInfo}/>
      </div>
    )
  }

}

export default Pokemon;