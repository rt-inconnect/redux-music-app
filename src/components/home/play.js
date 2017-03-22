import React, { Component } from 'react'

class Play extends Component {

  handlePlay = (sound) => {
    const { sounds, play, setPlaylist } = this.props
    play(sound)
    setPlaylist(sounds)
  }

  render() {

    const { sound, playing, playPlaying, pausePlaying } = this.props

    if (playing.isBuffering && playing.id === sound.id)
      return (
        <a className="btn btn-default app-extra-light-background app-buffering"><i className="glyphicon glyphicon-option-horizontal"/></a>
      )


    if (playing.isPlaying && playing.id === sound.id)
      return (
        <a className="btn btn-default app-pause app-base-background app-extra-light-color" onClick={ () => { pausePlaying() } }><i className="glyphicon glyphicon-pause"/></a>
      )

    if (!playing.isPlaying && playing.id === sound.id)
      return (
        <a className="btn btn-default app-play app-extra-light-background" onClick={ () => { playPlaying() } }><i className="glyphicon glyphicon-play"/></a>
      )

    return (
      <a className="btn btn-default app-extra-light-background app-play" onClick={ () => { this.handlePlay(sound) } }><i className="glyphicon glyphicon-play"/></a>
    )
  }
}

export default Play