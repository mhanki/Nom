#!/usr/bin/env node
import readline from 'readline'
import print from './print.js'

// used instead of console.clear() to preserver history
const _clearConsole = () => {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)
  readline.cursorTo(process.stdout, 0, 0)
  readline.clearScreenDown(process.stdout)
}

const nom = () => {
  let frame = 0

  const printFrames = () => {
    if(frame == 10){ 
      return clearInterval(printInterval) 
    }

    frame += 1
    _clearConsole()

    print(frame)
  }

  const printInterval = setInterval(printFrames, 100)
}

nom()
