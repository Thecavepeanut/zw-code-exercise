import React, { Component } from 'react'

import GithubKitty from './github.svg'

class Start extends Component {
  constructor(props) {
    super(props)

    this.kitty = null
  }
  componentDidMount() {
    const showResults = () => {
      increment += 0.01
      if (increment > 1) {
        clearInterval(id)
      }
      this.kitty.style.opacity = increment
    }

    let increment = 0
    this.kitty.style.opacity = 0
    const id = setInterval(showResults, 1)
    this.moveKitty()
  }

  moveKitty() {
    const moveKittyRight = () => {
      if (position === 200) {
        clearInterval(id)
        id = setInterval(moveKittyLeft, 6)
      }
      position++
      this.kitty.style.left = `${position}px`
    }

    const moveKittyLeft = () => {
      if (position === 0) {
        clearInterval(id)
        id = setInterval(moveKittyRight, 6)
      }
      position--
      this.kitty.style.left = `${position}px`
    }

    let id = setInterval(moveKittyRight, 6)
    let position = 0
    this.kitty.style.fill = '#fff'
  }



  render() {
    const { start } = this.props

    return (
      <div className='start'>
        <div className='header'>
          <h2>Welcome!</h2>
        </div>
        <p className='start-description'>Tag the Octocat 10 times to win!!</p>
        <div className='btn' onClick={start}>PLAY</div>
        <div className='kitty-container' ref={(gitKitty) => gitKitty ? this.kitty = gitKitty.children[0] : null}>
          <GithubKitty onClick={start} />
        </div>
      </div>
    )
  }
}

export default Start
