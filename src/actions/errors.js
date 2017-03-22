import {
  ADD_ERROR,
  REMOVE_ERROR,
} from './types'

export const addError = (error) => {
  return {
    type: ADD_ERROR,
    payload: error
  }
}

export const removeError = (index) => {
  return {
    type: REMOVE_ERROR,
    payload: index
  }
}
