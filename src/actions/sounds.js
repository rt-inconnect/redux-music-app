import {
  FETCH_SOUNDS,
} from './types'


import initialState from '../initialState'

export const fetchSounds = () => dispatch => {

  return setTimeout(() => {
    dispatch({
      type: FETCH_SOUNDS,
      payload: initialState.sounds
    })
  }, 500)

}