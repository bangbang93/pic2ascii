import {pic2ascii} from '../src'
import * as path from 'path'

pic2ascii(path.join(__dirname, 'image.jpg'))
  .then((matrix) => {
    for (let row of matrix) {
      console.log(row.join(''))
    }
  })
