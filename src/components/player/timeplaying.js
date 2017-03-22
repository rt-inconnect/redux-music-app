import React, { Component } from 'react'
import helper from '../../helper'

class Timeplaying extends Component {

  render() {
    const { playing } = this.props

    return (
      <div className="player-timeplaying app-player-bottom-border app-extra-light-color col-lg-3 col-sm-12 col-xs-12">
        <span className="player-timecurrent">{ helper.duration(playing.position) }</span>
        &nbsp;/&nbsp;
        <span className="player-timetotal app-base-color-muted">{ helper.duration(playing.duration) }</span>
      </div>
    )
  }
}

export default Timeplaying