import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { init } from '../../actions/playing'
import { connect } from 'react-redux'

import helper from '../../helper'

import Player from '../player'
import Errors from '../errors'

class App extends Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    const { styles } = this.props

    const css = helper.renderCss(styles);

    return (
      <div className="app" style={{ background: 'linear-gradient(to bottom right,' + styles.background + ')' }}>
        <style type="text/css">
          { css ? css : '' }
        </style>

        <div className="app-wrapper">
          <div className="container">

            <header className="app-header">

              <Player />

            </header>

            <main className="app-page">
              <Errors />
              { this.props.children }
            </main>

          </div>
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  styles: state.styles
})

const mapDispatchToProps = dispatch => bindActionCreators({
  init
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)