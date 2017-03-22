import {
  SET_SHUFFLE,
  SET_REPEAT,
  SET_MUTE,
  SET_VOLUME,
  SET_BACKGROUND
} from '../actions/types'

export default (state = {}, action) => {

  switch (action.type) {

    case SET_SHUFFLE:
      return {
        ...state,
        shuffle: !state.shuffle
      }

    case SET_REPEAT:
      return {
        ...state,
        repeat: !state.repeat
      }

    case SET_MUTE:
      return {
        ...state,
        mute: !state.mute
      }

    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload
      }

    case SET_BACKGROUND:
      return {
        ...state,
        background: action.payload
      }

    default:
      return state

  }

}