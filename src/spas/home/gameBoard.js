import React, { Component } from 'react'

import GithubKitty from './github.svg'
import Winner from './winner'

class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      showWinner: false,
    }
    this.kitty = null
    this.container = null
    this.gameboardElement = null
  }

  componentDidMount() {
    const showBoard = () => {
      if (increment > 1) {
        clearInterval(id)
      }
      increment += 0.01
      this.container.style.opacity = increment
    }

    let increment = 0
    const id = setInterval(showBoard, 1)
    this.kitty.style.opacity = 0
    this.container.style.opacity = 0

    setTimeout(() => {
      this.moveSVGElement(this.kitty)
    }, 1000)
  }

  handleClick() {
    const { counter } = this.state
    this.kitty.style.transform = `scale(${1.3})`
    this.kitty.style.fill = '#c81d25'

    setTimeout(() => {
      this.kitty.style.transform = `scale(${1})`
      this.kitty.style.fill = '#fff'
    }, 100)

    this.setState({ counter: counter + 1 })

    if (counter + 1 === 10) {
      this.removeContainer()
      setTimeout(() => {
        this.reset()
      }, 1000)
    }
  }

  removeContainer() {
    const close = () => {
      if (decrement < 0) {
        clearInterval(id)
      }
      decrement -= 0.01
      this.container.style.transform = `scale(${decrement})`
      this.container.style.opacity = decrement
    }

    const id = setInterval(close, 1)
    let decrement = 1
  }

  reset() {
    this.setState({
      showWinner: true,
      counter: 0,
    })
  }

  getRandomPosition(kitty) {
    const x = this.gameboardElement.offsetWidth - kitty.clientWidth
    const y = this.gameboardElement.offsetHeight - kitty.clientHeight
    const randomX = Math.floor(Math.random() * x)
    const randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
  }

  setPosition(kitty) {
    const position = this.getRandomPosition(kitty)
    kitty.style.left = `${position[0]}px`
    kitty.style.top = `${position[1]}px`
    return position
  }

  moveSVGElement(kitty) {
    function downRightFrame() {
      if (position[0] > 600) {
        clearInterval(id)
        id = setInterval(downLeftFrame, 3)
      } else if (position[1] > 700) {
        clearInterval(id)
        id = setInterval(upRightFrame, 3)
      }
      position[0]++
      position[1]++
      kitty.style.top = `${position[1]}px`
      kitty.style.left = `${position[0]}px`
    }

    function upLeftFrame() {
      if (position[0] < -200) {
        clearInterval(id)
        id = setInterval(upRightFrame, 3)
      } else if (position[1] < -200) {
        clearInterval(id)
        id = setInterval(downLeftFrame, 3)
      }
      position[0]--
      position[1]--
      kitty.style.top = `${position[1]}px`
      kitty.style.left = `${position[0]}px`
    }

    function downLeftFrame() {
      if (position[0] < -200) {
        clearInterval(id)
        id = setInterval(downRightFrame, 3)
      } else if (position[1] > 700) {
        clearInterval(id)
        id = setInterval(upLeftFrame, 3)
      }
      position[0]--
      position[1]++
      kitty.style.top = `${position[1]}px`
      kitty.style.left = `${position[0]}px`
    }

    function upRightFrame() {
      if (position[0] > 600) {
        clearInterval(id)
        id = setInterval(upLeftFrame, 3)
      } else if (position[1] < -200) {
        clearInterval(id)
        id = setInterval(downRightFrame, 3)
      }
      position[0]++
      position[1]--
      kitty.style.top = `${position[1]}px`
      kitty.style.left = `${position[0]}px`
    }

    kitty.style.opacity = 1
    const position = this.setPosition(kitty)
    let id = setInterval(downRightFrame, 3)
  }

  render() {
    const { counter, showWinner } = this.state
    const { reset } = this.props

    return (
      <div className='board' ref={(boardContainer) => boardContainer ? this.container = boardContainer : null}>
        {!showWinner
          ? <div>
              <div className='header'>
                <h2>Score: {counter}</h2>
              </div>
              <div className='game-container' ref={(gameBoard) => gameBoard ? this.gameboardElement = gameBoard : null}>
                <h1>Nice!</h1>
                <div ref={(gitKitty) => gitKitty ? this.kitty = gitKitty.children[0] : null}>
                  <GithubKitty onClick={this.handleClick.bind(this)} />
                </div>
              </div>
            </div>
          : <Winner reset={reset} container={this.container}/>
        }
      </div>
    )
  }
}

export default GameBoard
