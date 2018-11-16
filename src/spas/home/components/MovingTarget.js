import React from 'react'

import GithubKitty from '../icons/github.svg'

class MovingTarget extends React.Component{
  render(){
    return (
      <div className="moving-target-container">
        <GithubKitty className="github-kitty-icon" onClick={this.props.onClick}/>
      </div>
    )
  }
}

export default MovingTarget