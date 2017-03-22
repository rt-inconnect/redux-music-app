import React, { Component } from 'react'
//import { play } from '../../actions/sound'

class Controls extends Component {

  renderPlayPause = () => {

    const { playing, playPlaying, pausePlaying } = this.props

    if (playing.isBuffering) {

      return <a className="btn btn-default btn-buffering app-base-color app-btn-circled"><i className="glyphicon glyphicon-option-horizontal"/></a>

    }

    if (playing.isPlaying) {

      return <a className="btn btn-default btn-pause app-base-color app-btn-circled" onClick={ () => { pausePlaying() } }><i className="glyphicon glyphicon-pause"/></a>

    } else {

      return <a className="btn btn-default btn-play app-base-color app-btn-circled" onClick={ () => { playPlaying() } }><i className="glyphicon glyphicon-play"/></a>

    }
  }

  render() {
    const { forward, backward } = this.props

    return (
      <div className="player-controls app-player-top-border col-lg-3 col-sm-6 col-xs-12">
        <a className="btn btn-default btn-prev app-base-color" onClick={ () => { backward() } }><i className="glyphicon glyphicon-step-backward"/></a>
        { this.renderPlayPause() }
        <a className="btn btn-default btn-next app-base-color" onClick={ () => { forward() } }><i className="glyphicon glyphicon-step-forward"/></a>
      </div>
    )
  }
}

export default Controls