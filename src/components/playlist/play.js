import React, { Component } from 'react'

class Play extends Component {

  handlePlay = (sound) => {
    const { play } = this.props
    play(sound)
  }

  render() {

    const { sound, playing, playPlaying, pausePlaying } = this.props

    if (playing.isBuffering && playing.id === sound.id)
      return (
        <a className="btn btn-default btn-xs app-buffering"><i className="glyphicon glyphicon-option-horizontal"/></a>
      )


    if (playing.isPlaying && playing.id === sound.id)
      return (
        <a className="btn btn-default btn-xs app-pause" onClick={ () => { pausePlaying() } }><i className="glyphicon glyphicon-pause"/></a>
      )

    if (!playing.isPlaying && playing.id === sound.id)
      return (
        <a className="btn btn-default btn-xs app-play" onClick={ () => { playPlaying() } }><i className="glyphicon glyphicon-play"/></a>
      )

    return (
      <a className="btn btn-default btn-xs app-play" onClick={ () => { this.handlePlay(sound) } }><i className="glyphicon glyphicon-play"/></a>
    )
  }
}

export default Play