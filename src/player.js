import { soundManager } from 'soundmanager2'
import config from './config'

let prefix = 'sound';

export default {

  /* Returns player soundManager */
  getPlayer() {
    return soundManager;
  },

  /* Returns a SMSound object instance */
  createSound(id, url, volume = 30) {
    return soundManager.createSound({
      id: prefix + id,
      url: config.MP3_CDN + url,
      volume: volume
    })
  },

  /* Returns the related sound object */
  unloadSound(id) {
    soundManager.stopAll()
    return soundManager.unload(prefix + id)
  },

  /* Returns an SMSound (sound object) instance */
  play(sound, volume) {
    if (!soundManager.getSoundById(prefix + sound.id)) this.createSound(sound.id, sound.url, volume)
    soundManager.play(prefix + sound.id)
  },

  /* Returns the given sound object */
  pause(id) {
    return soundManager.pause(prefix + id)
  },

  /* Returns the related sound object */
  seek(id, position) {
    let sound = soundManager.getSoundById(prefix + id)
    sound.setPosition(position)
  },

  /* Returns volume */
  volume(volume) {
    soundManager.soundIDs.forEach(function (id) {
      soundManager.getSoundById(id).setVolume(volume)
    })
    return volume
  },

  /* Returns soundManager.muted */
  mute(isMute) {
    if (soundManager.muted || !isMute) {
      soundManager.unmute()
    } else {
      soundManager.mute()
    }
    return soundManager.muted
  }

}