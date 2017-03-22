import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removeError } from '../../actions/errors'

class Errors extends Component {

  renderError = (error, index) => {
    const { removeError } = this.props

    setTimeout(() => {
      removeError(index)
    }, 5000)

    return (
      <div key={index} className="alert alert-danger" role="alert" onClick={ () => { removeError(index) } }>{ error }</div>
    )
  }

  render() {
    const { errors } = this.props

    return (
      <div className="app-errors">
        { errors.map(this.renderError) }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  errors: state.errors
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removeError
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Errors)