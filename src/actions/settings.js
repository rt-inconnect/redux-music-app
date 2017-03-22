import {
  SET_SHUFFLE,
  SET_REPEAT,
  SET_MUTE,
  SET_VOLUME
} from './types'

import player from '../player'

export const setShuffle = () => {
  return {
    type: SET_SHUFFLE
  }
}

export const setRepeat = () => {
  return {
    type: SET_REPEAT
  }
}

export const setMute = () => (dispatch, getState) => {
  const { settings } = getState()

  player.mute(!settings.mute)

  dispatch({ type: SET_MUTE })
}

export const setVolume = (volume) => (dispatch, getState) => {

  const { settings } = getState()

  player.volume(volume)

  if (settings.mute) dispatch(setMute())

  dispatch({
    type: SET_VOLUME,
    payload: volume
  })
}