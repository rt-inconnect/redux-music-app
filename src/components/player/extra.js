import React, { Component } from 'react'
import classNames from 'classnames/dedupe'

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class Extra extends Component {

  handleChange = (volume) => {
    const { setVolume } = this.props
    setVolume(volume);
  }

  render() {

    const { settings, setShuffle, setRepeat, setMute } = this.props
    const volumeClass = classNames(
      'glyphicon',
      {
        'glyphicon-volume-off': settings.mute || settings.volume === 0,
        'glyphicon-volume-up': !settings.mute && settings.volume >= 50,
        'glyphicon-volume-down': !settings.mute && settings.volume < 50 && settings.volume > 0
      }
    )
    const volumeBtnClass = classNames(
      'btn',
      'btn-default',
      'app-base-color-muted',
      { 'enabled': !settings.mute && settings.volume > 0 }
    )
    const shuffleClass = classNames(
      'btn',
      'btn-default',
      'app-base-color-muted',
      { 'enabled': settings.shuffle }
    )
    const repeatClass = classNames(
      'btn',
      'btn-default',
      'app-base-color-muted',
      { 'enabled': settings.repeat }
    )

    return (
      <div className="player-extrabtns col-lg-2 lol-sm-12 col-xs-12">
        <div className="player-volume">
          <div className="player-volume-wrapper app-base-background app-player-bottom-border">
            <Slider
              min={0}
              max={100}
              tooltip={false}
              value={settings.volume}
              onChange={this.handleChange}
            />
          </div>

          <a className={volumeBtnClass} onClick={setMute}><i className={volumeClass} /></a>
        </div>
        <a className={shuffleClass} onClick={setShuffle}><i className="glyphicon glyphicon-random" /></a>
        <a className={repeatClass} onClick={setRepeat}><i className="glyphicon glyphicon-repeat" /></a>
      </div>
    )
  }
}

export default Extra