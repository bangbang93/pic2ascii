#!env node
import {pic2ascii} from './index'
import * as path from 'path'

const filename = process.argv[2]

if (!filename) {
  console.log('bin.ts <filename>')
  process.exit(1)
}

pic2ascii(path.join(process.cwd(), filename))
  .then((matrix) => {
    for (let row of matrix) {
      console.log(row.join(''))
    }
  })
  .catch(console.error)
