import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
    searchTerm: '',
    result: []
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(json => this.setState({ allPokemon: json }))
  }

  handleSearchChange = (e, {value} ) => {
    console.log({value})
    let searchTerm = {value}[value]
    this.setState.searchTerm = {value}[value]
    let newResults = this.state.allPokemon.filter(pokemon => pokemon.name.includes(searchTerm))
    this.setState({ result: newResults })
  }

  componentDidMount = () => {
    this.fetchPokemon()
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={true} />
        <br />
        <PokemonCollection allPokemon={!this.state.result.length ? this.state.allPokemon : this.state.result } />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
