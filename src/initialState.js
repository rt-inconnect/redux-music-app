let sounds = [
  { name: 'Roald Velden - Complicated (Original Mix)', duration: 281 },
  { name: 'никого не люблю - мороженое', duration: 334 },
  { name: 'Flatsound - i exist i exist i exist', duration: 315 },
  { name: 'The Captive Oceans - There is a World Better Off Without Me', duration: 321 },
  { name: 'Man An Ocean - My Girl And The Sea', duration: 350 },
  { name: 'Michael FK - Michael FK & Mary Leshno - Shine', duration: 241 },
  { name: 'Halbwome - Understand', duration: 228 },
  { name: 'Hakuu - Crescent', duration: 251 },
  { name: 'Anfield - Still So Distant', duration: 408 },
  { name: 'TYMELAPSE - We Became Strangers... Again', duration: 415 },
  { name: 'Animula - Letter (Outro)', duration: 415 },
  { name: 'Jani R - Story', duration: 296 },
  { name: 'Sagat Marei - Гаптофобия', duration: 115 }
]

function generateSounds() {

  let results = []

  sounds.forEach((sound, i) => {
    results.push({
      id: i + 1,
      name: sound.name.split(' - ')[0],
      artist: sound.name.split(' - ')[1],
      cover: i + '.jpg',
      url: i + '.mp3',
      duration: sound.duration,
      position: 0
    })
  })

  return results

}

export default {
  settings: { volume: 100, mute: false, shuffle: false, repeat: false },
  styles: { background: '#6f3634,#616563' },
  playing: generateSounds()[0],
  sounds: generateSounds()

}