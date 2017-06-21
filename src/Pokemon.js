import React from 'react'
import { Route } from 'react-router-dom';
import './Pokemon.css'

function Homework(props) {
  return (
    <div className="pokemon">
      <img className="pokemon-logo" src="https://goo.gl/hEBmYj" alt="pokemon logo" />
      <form>
        <div>
          <input 
            type="text"
            /*value={this.state.username}
            onChange={this.handleChange}*/
          />
        </div>
        <div>
          <button type="submit">Look up Pokemon</button>
        </div>
      </form>

      <Route exact path='/pokemon' render={() => <h3>Please enter the name of a Pokemon</h3>}/>
      {/*<Route path='/github/:username' component={GithubUser}/>*/}
    </div>
  )
}

export default Homework