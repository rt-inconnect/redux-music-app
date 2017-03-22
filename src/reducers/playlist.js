import {
  CHANGE_PLAYLIST
} from '../actions/types'

export default (state = [], action) => {

  switch (action.type) {

    case CHANGE_PLAYLIST:
      return [ ...action.payload ]

    default:
      return state

  }

}