import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchSounds } from '../../actions/sounds'
import { play, pausePlaying, playPlaying } from '../../actions/playing'
import { setPlaylist } from '../../actions/playlist'
import Play from './play'
import config from '../../config'

class Home extends Component {

  componentWillMount() {
    //this.props.fetchSounds()
  }

  renderSound = (sound) => {
    return (
      <div className="col-md-3 col-sm-4 col-xs-6" key={sound.id}>
        <div className="app-sound-item">
          <img src={ config.IMG_CDN + sound.cover } className="img-responsive" alt="Responsive" />
          <Play sound={sound} {...this.props} />
          <div className="app-sound-info app-extra-background">
            <p className="app-sound-name">{ sound.name }</p>
            <p className="app-sound-artist">{ sound.artist }</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { sounds } = this.props

    return (
      <div>
        <div className="row app-page-home">{ sounds.map(this.renderSound) }</div>
        <div className="app-loading">
          <p><i className="glyphicon glyphicon-option-horizontal" /></p>
          <p className="app-uppercase">Loading...</p>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  sounds: state.sounds,
  playing: state.playing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSounds,
  play,
  setPlaylist,
  pausePlaying,
  playPlaying
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)