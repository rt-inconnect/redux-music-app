import React, { Component } from 'react'

class Info extends Component {

  render() {
    const { playing } = this.props

    return (

      <div className="player-info col-lg-3 col-sm-6 col-xs-12">
        <div className="player-playing">
          <p className="player-sound-name">{ playing.name }</p>
          <p className="player-artist app-font-color-muted">{ playing.artist }</p>
        </div>
      </div>

    )
  }
}

export default Info