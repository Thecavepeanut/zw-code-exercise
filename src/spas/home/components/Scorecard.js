import React from 'react'
import BeerIcon from '../icons/beer.svg'

const Scorecard = props => {

  return <div className='score-container'>
    <h3 className='score-text'>Score:</h3>
    {[...Array(props.playerScore).keys()].map((i) => {
      return <BeerIcon key={i} className='beer-icon'/>
    })}
  </div>
}

export default Scorecard