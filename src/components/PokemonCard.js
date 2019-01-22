import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    cardFront: true
  }

  switchCard = (e, pokemon) => {
    let newState = !this.state.cardFront
    this.setState({ cardFront: newState})
  }


  render() {

    return (
      <Card onClick={(e) => this.switchCard(e, this.props.onePokemon)} >
        <div>
          <div className="image">
            <img src={this.state.cardFront === true ? this.props.onePokemon.sprites.front : this.props.onePokemon.sprites.back } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.onePokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
            {this.props.onePokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
