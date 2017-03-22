import {
  CHANGE_PLAYING,
  PAUSE_PLAYING,
  PLAY_PLAYING,
  SEEK_PLAYING,
  IS_BUFFERING
} from '../actions/types'

export default (state = {}, action) => {

  switch (action.type) {

    case CHANGE_PLAYING:
      return {
        ...action.payload,
        isPlaying: true
      }

    case PAUSE_PLAYING:
      return {
        ...state,
        isPlaying: false
      }

    case PLAY_PLAYING:
      return {
        ...state,
        isPlaying: true
      }

    case SEEK_PLAYING:
      return {
        ...state,
        position: action.payload
      }

    case IS_BUFFERING:
      return {
        ...state,
        isBuffering: action.payload
      }

    default:
      return state

  }

}