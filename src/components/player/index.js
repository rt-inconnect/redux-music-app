import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  playPlaying,
  pausePlaying,
  seekPlaying,
  forward,
  backward
} from '../../actions/playing'

import {
  setShuffle,
  setRepeat,
  setMute,
  setVolume
} from '../../actions/settings'

import Controls from './controls'
import Info from './info'
import Menu from './menu'
import Timeplaying from './timeplaying'
import Seek from './seek'
import Extra from './extra'


class Player extends Component {

  render() {

    return (

      <nav className="app-player">

        <div className="player-top app-extra-background row">
          <Controls {...this.props} />
          <Info {...this.props} />
          <Menu />
        </div>


        <div className="player-bottom app-base-background row">

          <Timeplaying {...this.props} />
          <Seek {...this.props} />
          <Extra {...this.props} />

        </div>

      </nav>
    )
  }
}

const mapStateToProps = state => ({
  playing: state.playing,
  settings: state.settings
})

const mapDispatchToProps = dispatch => bindActionCreators({
  playPlaying,
  pausePlaying,
  seekPlaying,
  forward,
  backward,
  setShuffle,
  setRepeat,
  setMute,
  setVolume
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Player)