import {
  SET_STYLES
} from './types'

import * as Vibrant from 'node-vibrant'
import tinycolor from 'tinycolor2'

import config from '../config'

export const setStyles = (sound) => (dispatch, getState) => {

  if (document) {
    let elements = document.getElementsByClassName('vibrant-canvas')
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }

  Vibrant.from(config.IMG_CDN + sound.cover).getPalette((err, palette) => {
    let palletePriority = [ 'Vibrant', 'Muted', 'DarkVibrant', 'DarkMuted', 'LightVibrant', 'LightMuted' ]

    let vibrantResults = [];
    palletePriority.forEach((priority) => {
      if (palette[priority]) vibrantResults.push(palette[priority].getHex())
    })

    let background = [vibrantResults[3], vibrantResults[4]].join()
//    let background = vibrantResults.join()
    let baseColor = vibrantResults[0]

    let medianBrightness = 130;
    let currentBrightness = tinycolor(baseColor).getBrightness()
    if (currentBrightness > medianBrightness) {
      baseColor = tinycolor(baseColor).darken(((currentBrightness - medianBrightness) / 255 * 100)).toString()
    } else {
      baseColor = tinycolor(baseColor).brighten(((medianBrightness - currentBrightness) / 255 * 100)).toString()
    }
//    console.log(currentBrightness, tinycolor(baseColor).getBrightness())


    let result = {
      background: background,
      baseBg: baseColor + ',' + tinycolor(baseColor).darken(20).toString(),
      base: baseColor,
      extra: tinycolor(baseColor).lighten(50).toString(),
      extraLight: tinycolor(baseColor).lighten(100).toString(),
      baseMuted: tinycolor(baseColor).darken(20).toString(),
      font: tinycolor(baseColor).darken(30).toString(),
      fontMuted: tinycolor(baseColor).darken(20).toString(),
      topBorder: tinycolor(baseColor).lighten(40).toString(),
      bottomBorder: tinycolor(baseColor).darken(10).toString()
    }

    dispatch({
      type: SET_STYLES,
      payload: result
    })

  })

}