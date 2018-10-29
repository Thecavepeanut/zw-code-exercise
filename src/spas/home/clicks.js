import React, { Component } from 'react'
import './home.font'


const clicks = ({ numberOfClicks }) => {
  let renderNumberOfClicks = () => {
    let tableOfClicks = [];
    for (let i = 1; i < 11; i++) {
      i <= numberOfClicks
        ? tableOfClicks.push((<span className="icon icon-beer icon-click" key={i} />))
        : tableOfClicks.push((<span className="icon icon-beer" key={i} />))
    }
    return tableOfClicks;
  }

  return (
    <div className="clicks">
      {renderNumberOfClicks()}
    </div>
  )
}

export default clicks