import {
  ADD_ERROR,
  REMOVE_ERROR,
} from '../actions/types'

export default (state = [], action)  => {

  switch (action.type) {

    case ADD_ERROR:
      return [ ...state, action.payload ]

    case REMOVE_ERROR:
      return state.filter((error, i) => i !== action.payload)

    default:
      return state

  }

}
