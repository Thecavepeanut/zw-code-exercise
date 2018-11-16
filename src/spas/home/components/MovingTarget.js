import React from 'react'
import constants from '../helpers/constants'

import GithubKitty from '../icons/github.svg'

class MovingTarget extends React.Component{

  constructor(){
    super();
    this.state = {
      targetPosition: {
        x: Math.floor(Math.random() * (window.innerWidth)),
        y: Math.floor(Math.random() * (window.innerHeight))
      } 
    }
    this.xSpeed = constants.TARGET_SPEED;
    this.ySpeed = constants.TARGET_SPEED;
    this.interval = setInterval(() => this.tick(), 30);
  }

  componentDidMount(){
    
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }


  tick(){
    let { x, y } = this.state.targetPosition;
    let { xSpeed, ySpeed } = this;

    let newX = x += xSpeed;
    let newY = y += ySpeed;

    if((x + constants.ICON_SIZE) >= window.innerWidth || x <= 0){
      // check left/right bounds and reverse
      this.xSpeed = -1 * xSpeed
    }
    if((y + constants.ICON_SIZE) >= window.innerHeight || y <= 0){
      // check top/bottom bounds and reverse
      this.ySpeed = -1 * ySpeed
    }

    this.setState({
      targetPosition: {
        x: newX,
        y: newY
      }
    })
  }

  render(){
    return (
      <div className="moving-target-container">
        <GithubKitty className="github-kitty-icon" 
        onClick={this.props.onClick}
        style={{ left: this.state.targetPosition.x + "px", top: this.state.targetPosition.y + "px" }}/>
      </div>
    )
  }
}

export default MovingTarget