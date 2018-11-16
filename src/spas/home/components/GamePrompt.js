import React from 'react'
import Button from './Button'

const GamePrompt = props => (
  <div className='game-prompt-container'>
    <div className='game-prompt-text'>
      {props.promptText}
    </div>
    <Button text={props.buttonText}
      onClick={props.onClick}/>
  </div>
)

export default GamePrompt