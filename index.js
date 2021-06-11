#!/usr/bin/env node
import print from './print.js'

const nom = () => {
  let frame = 0

  const printFrames = () => {
    if(frame == 10){ 
      return clearInterval(printInterval) 
    }

    frame += 1
    console.clear()

    print(frame)
  }

  const printInterval = setInterval(printFrames, 100)
}

nom()
