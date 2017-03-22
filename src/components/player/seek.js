import React, { Component } from 'react'

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class Seek extends Component {

  handleChange = (value) => {
    const { seekPlaying } = this.props
    seekPlaying(value)
  }

  render() {
    const { position, duration } = this.props.playing

    return (
      <div className="player-seek app-player-bottom-border col-lg-7 col-sm-12 col-xs-12">

          <Slider
            min={0}
            max={duration}
            tooltip={false}
            value={position}
            onChange={this.handleChange}
          />

      </div>
    )
  }
}

export default Seek