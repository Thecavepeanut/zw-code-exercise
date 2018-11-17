import React from 'react'
import constants from '../helpers/constants'
import requestInterval from '../helpers/requestInterval'
import clearRequestInterval from '../helpers/clearInterval'

import GithubKitty from '../icons/github.svg'

class MovingTarget extends React.Component{

  constructor(){
    super();
    this.state = {
      targetPosition: {
        x: Math.floor(Math.random() * (window.innerWidth - constants.ICON_SIZE)),
        y: Math.floor(Math.random() * (window.innerHeight - constants.ICON_SIZE))
      } 
    }
    this.xSpeed = constants.TARGET_SPEED;
    this.ySpeed = constants.TARGET_SPEED;
    this.handleTargetClick = this.handleTargetClick.bind(this);
  }

  componentDidMount(){
    this.interval = requestInterval(() => this.tick());
  }

  componentWillUnmount(){
    clearRequestInterval(this.interval);
  }

  tick(){
    let { x, y } = this.state.targetPosition;
    let { xSpeed, ySpeed } = this;

    let newX = x += xSpeed;
    let newY = y += ySpeed;

    if((x + constants.ICON_SIZE) >= window.innerWidth || x <= 0){
      // check left/right bounds and reverse
      this.reverseSpeed(true)
    }
    if((y + constants.ICON_SIZE) >= window.innerHeight || y <= 0){
      // check top/bottom bounds and reverse
      this.reverseSpeed(false)
    }

    this.setState({
      targetPosition: {
        x: newX,
        y: newY
      }
    })
  }

  reverseSpeed(xHit){
    if(xHit){
      this.xSpeed = (this.xSpeed * (Math.random() + 0.5)) * -1
    }else{
      this.ySpeed = (this.ySpeed * (Math.random() + 0.5)) * -1
    }
  }

  handleTargetClick(){
    this.props.onClick();
    this.reverseSpeed(Math.random() > 0.5);
  }

  render(){
    const newPosition = { top: this.state.targetPosition.y + "px", left: this.state.targetPosition.x + "px" }
    return (
      <div className="moving-target-container github-kitty-icon" style={newPosition} onClick={this.handleTargetClick}>
        <GithubKitty />
      </div>
    )
  }
}

export default MovingTarget