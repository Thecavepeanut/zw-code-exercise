import React from 'react'
import Square from './icons/square.svg'

const shuffle = (arr) => {
  let i, j, x;
  for (i = 0; i < arr.length; i++) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
  }
  return arr;
}

const SquareGenerator = ({red, green, blue, onClick, score}) => {
  const squares = [<Square key={red+green+blue} 
                          onClick={() => onClick(true)} style={{ fill: `rgb(${red},${green},${blue})` }}/>]

  for(let i = 0; i < score * 2 + 2; i++){
    let randRed = red + Math.floor(Math.random()*100) - 50
    let randGreen = green + Math.floor(Math.random()*100) - 50
    let randBlue = blue + Math.floor(Math.random()*100) - 50
    squares.push(<Square key={red*randRed+green*randGreen+blue*randBlue} 
                        onClick={() => onClick(false)} style={{ fill: `rgb(${randRed},${randGreen},${randBlue})` }}/>)
  }

  return shuffle(squares);
}

export default SquareGenerator
