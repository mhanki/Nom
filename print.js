import { turtle, strawberry, nom1, nom2 } from './ascii.js'

const textFrames = [4, 7, 10]
let turtleMargin = ""
let berryMargin = Array(61).join(' ')
let nomCount = 0

const print = (frame) => {
  if(textFrames.includes(frame)){ 
    [nomCount, turtleMargin, berryMargin] = _addText(nomCount, berryMargin)
  }

  _print(nomCount, turtleMargin, berryMargin)

  turtleMargin += Array(6).join(' ')
  berryMargin = berryMargin.replace(Array(6).join(' '), '') 
}

const _addText = (nomCount, berryMargin) => [
  nomCount+1,
  Array(3).join(' '),
  berryMargin.replace(Array(6).join(' '), '')
]

const _print = (nomCount, turtleMargin, berryMargin) => {
  for(let i = 0; i < 5; i++){
    console.log(_printAscii(i, nomCount, turtleMargin, berryMargin))
  }
}

const _printAscii = (i, nomCount, turtleMargin, berryMargin) => 
  _nom(nomCount, i) + _turtle(turtleMargin, i) + _berry(berryMargin, i)

const _nom = (count, i) => {
  let str = count >= 1 ? [nom1[i]] : []

  if(count >= 2){ 
    for(let j = 1; j < count; j++){ str.push(nom2[i]) }
  }

  return str.join("  ")
}

const _berry = (berryMargin, i) => berryMargin + strawberry[i]
const _turtle = (turtleMargin, i) => turtleMargin + turtle[i]


export default print