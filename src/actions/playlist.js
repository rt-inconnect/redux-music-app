import {
  CHANGE_PLAYLIST
} from './types'


export const setPlaylist = (sounds) => {
  return {
    type: CHANGE_PLAYLIST,
    payload: sounds
  }
}
