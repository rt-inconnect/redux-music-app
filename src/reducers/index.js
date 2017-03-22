import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import errors from './errors'
import settings from './settings'
import sounds from './sounds'
import playing from './playing'
import playlist from './playlist'
import styles from './styles'

export default combineReducers({
  routing: routerReducer,
  errors,
  settings,
  styles,
  sounds,
  playing,
  playlist
})