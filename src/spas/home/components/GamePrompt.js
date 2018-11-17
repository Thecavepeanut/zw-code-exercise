import React from 'react'
import Button from './Button'

const GamePrompt = props => (
  <div className='game-prompt-container'>
    {props.promptTitle && <h1 className='game-prompt-title'>{props.promptTitle}</h1>}
    {props.promptText && <h4 className='game-prompt-text'>{props.promptText}</h4>}
    {props.buttonText && <Button text={props.buttonText} onClick={props.onClick} />}
  </div>
)

export default GamePrompt