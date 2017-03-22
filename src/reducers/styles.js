import {
  SET_STYLES
} from '../actions/types'

export default (state = {}, action) => {

  switch (action.type) {

    case SET_STYLES:
      return {
        ...action.payload
      }

    default:
      return state

  }

}