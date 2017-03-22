import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { play, pausePlaying, playPlaying } from '../../actions/playing'
import { setPlaylist } from '../../actions/playlist'
import config from '../../config'
import helper from '../../helper'

import Play from './play'

class Playlist extends Component {

  renderSound = (sound) => {
    return (
      <tr key={sound.id}>
          <th scope="row"><Play sound={sound} {...this.props} /></th>
          <td className="app-color-white">{sound.name}</td>
          <td>{sound.artist}</td>
          <td>{helper.duration(sound.duration)}</td>
      </tr>
    )
  }

  render() {
    const { playing, playlist, styles } = this.props
    const bg = styles.background.split(',');

    return (
      <div className="app-page-playlist" style={{ background: `url("${config.IMG_CDN + playing.cover}") ${bg[1]} no-repeat` }}>
        <div className="app-playlist-wrapper">
          <div className="app-playlist-info">
            <img className="img-responsive" src={config.IMG_CDN + playing.cover} alt={`${playing.artist} - ${playing.name}`} />
          </div>
          <div className="row app-playlist-list">
            <table className="table">
              <thead>
                <tr>
                    <th></th>
                    <th className="color-white">Name</th>
                    <th className="color-white">Artist</th>
                    <th className="color-white">Time</th>
                </tr>
              </thead>
              <tbody>
                { playlist.map(this.renderSound) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  playlist: state.playlist,
  playing: state.playing,
  styles: state.styles
})

const mapDispatchToProps = dispatch => bindActionCreators({
  play,
  setPlaylist,
  pausePlaying,
  playPlaying
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)