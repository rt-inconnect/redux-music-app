import React, { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {

  render() {

    return (

      <div className="player-menu col-lg-6 col-sm-12 col-xs-12">
        <form className="form-inline app-search app-inline">
          <div className="form-group">
            <div className="input-group">
              <input type="text" className="form-control app-extra-light-background" placeholder="Search" />
              <div className="input-group-addon app-extra-light-background app-base-color"><i className="glyphicon glyphicon-search" /></div>
            </div>
          </div>
        </form>

        <div className="btn-group app-inline">
          <Link to="/" className="btn btn-default player-menuitem app-extra-light-background">
            <i className="glyphicon glyphicon-home app-base-color" /> <span className="player-menutext">Home</span>
          </Link>
        </div>
        <Link to="/playlist" className="app-inline btn btn-default player-menuitem player-playlist-btn app-base-background app-extra-light-color">
          <i className="glyphicon glyphicon-music" /> <span className="player-menutext">My Playlist</span>
        </Link>
      </div>

    )
  }
}

export default Menu