import * as Jimp from 'jimp'
import {grayToChar} from './data'

export async function pic2ascii(file) {
  const image = await Jimp.read(file)
  const ascii = []

  const {width, height} = image.bitmap

  for(let row = 0; row < height; row += 2) {
    const currentRow = []
    for (let col = 0; col < width; col ++) {
      const color = image.getPixelColor(col, row)
      const color1 = image.getPixelColor(col, row + 1)
      const {r, g, b} = Jimp['intToRGBA'](color)
      const {r:r1, g:g1, b:b1} = Jimp['intToRGBA'](color1)
      const avg = (~~r+~~g+~~b) / 3
      const avg1 = (~~r1+~~g1+~~b1) / 3
      const gray = Math.round((avg + avg1) * 9 / 51)
      currentRow.push(searchChar(gray))
    }
    ascii.push(currentRow)
  }
  return ascii
}

function searchChar(gray) {
  const keys = Object.keys(grayToChar)
  for(const g of keys) {
    if (g > gray) {
      return grayToChar[g]
    }
  }
  return grayToChar[keys.pop()]
}
