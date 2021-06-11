#!/usr/bin/env node
import { turtle, strawberry, nom1, nom2 } from './ascii.js'

const strawbSpace = Array(61).join(' ')
const _strawb = (sSpace, i) => strawbSpace.replace(sSpace, '') + strawberry[i]
const _turtle = (tSpace, i) => tSpace + turtle[i]
const _nom = (count, i) => {
  if(count == 0){ return ''}
  if(count == 1){ return nom1[i] }
  if(count == 2){ return nom1[i] + "  " + nom2[i] }
  if(count == 3){ return nom1[i] + "  " + nom2[i] + "  " + nom2[i] }
}

const ascii = (i, nomCount, tSpace, sSpace) => _nom(nomCount, i) + _turtle(tSpace, i) + _strawb(sSpace, i)

const _print = (nomCount, tSpace, sSpace) => {
  for(let i = 0; i < 5; i++){
    console.log(ascii(i, nomCount, tSpace, sSpace))
  }
}

const nom = () => {
  let tSpace = ""
  let increments = 1

  const print = () => {
    if(increments == 10){ return clearInterval(move)}

    increments += 1
    console.clear()

    if(increments == 4){ tSpace = "  " }
    if(increments == 7){ tSpace = "  " }
    if(increments == 10){ tSpace = "  " }

    let nomCount = 0
    let sSpace = tSpace

    if(increments >= 10){
      nomCount = 3
      sSpace = Array(61).join(' ')
    } else if(increments >= 7){
      nomCount = 2
      sSpace += Array(39).join(' ')
    } else if(increments >= 4){
      nomCount = 1
      sSpace += Array(19).join(' ')
    }

    _print(nomCount, tSpace, sSpace)

    tSpace += Array(6).join(' ')
  }

  const move = setInterval(print, 100)
}

nom()
