import {
  ADD_ERROR,
  CHANGE_PLAYING,
  SEEK_PLAYING,
  PAUSE_PLAYING,
  PLAY_PLAYING,
  IS_BUFFERING
} from './types'

import { setStyles } from './styles'
import player from '../player'

const getRandom = (max) => {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

export const play = (sound) => (dispatch, getState) => {
  const { playing, settings } = getState()
  if (playing.isPlaying) player.unloadSound(playing.id)
  player.play(sound, settings.volume)

  dispatch(setStyles(sound))

  dispatch({
    type: CHANGE_PLAYING,
    payload: sound
  })
}

export const pausePlaying = () => (dispatch, getState) => {
  const { playing } = getState()

  if (!playing || !playing.id) return dispatch({ type: ADD_ERROR, payload: 'No sound to pause!' })

  player.pause(playing.id)

  dispatch({
    type: PAUSE_PLAYING
  })
}

export const playPlaying = () => (dispatch, getState) => {
  const { playing, settings } = getState()

  if (!playing || !playing.id) return dispatch({ type: ADD_ERROR, payload: 'No sound to play!' })

  player.play(playing, settings.volume)

  dispatch({
    type: PLAY_PLAYING
  })
}

export const seekPlaying = (position) => (dispatch, getState) => {
  const { playing } = getState()

  if (!playing || !playing.id) return dispatch({ type: ADD_ERROR, payload: 'No sound to seek!' })

  player.seek(playing.id, position * 1000)

  dispatch({
    type: SEEK_PLAYING,
    payload: position
  })
}

export const forward = () => (dispatch, getState) => {
  const { playing, playlist, settings } = getState()

  if (playlist.length > 0) {
    let index = playlist.map(function (sound) { return sound.id }).indexOf(playing.id)
    let nextIndex = index + 1
    if (index === playlist.length - 1) nextIndex = 0
    if (settings.shuffle) nextIndex = getRandom(playlist.length - 1)
    dispatch(play(playlist[nextIndex]))
  }

}

export const backward = () => (dispatch, getState) => {
  const { playing, playlist } = getState()

  if (playlist.length > 0) {
    let index = playlist.map(function (sound) { return sound.id }).indexOf(playing.id)
    let nextIndex = index - 1
    if (index === 0) nextIndex = playlist.length - 1
    dispatch(play(playlist[nextIndex]))
  }

}

export const init = () => (dispatch, getState) => {
  const sm2 = player.getPlayer()

  const whileplaying = function (sound) {
    let position = Math.floor(sound.position/1000)
    const { playing } = getState()
    if (playing.position !== position) {
      dispatch({ type: SEEK_PLAYING, payload: position })
    }
  }

  var onfinish = function () {
    const { settings, playing } = getState()
    if (settings.repeat) return dispatch(play(playing))
    dispatch(forward())
  }

  var onbufferchange = function (sound) {
    dispatch({ type: IS_BUFFERING, payload: sound.isBuffering });
  }

  sm2.setup({
    debugMode: false,
    defaultOptions: {
      whileplaying() { whileplaying(this) },
      onfinish() { onfinish(this) },
      onbufferchange() { onbufferchange(this) }
    }
  })

}
