import React, { Component } from 'react'

import GithubKitty from './github.svg'

class Winner extends Component {
  constructor(props) {
    super(props)
    this.kitty = null
    this.container = this.props.container
  }

  componentDidMount() {
    const showResults = () => {
      if (increment > 1) {
        clearInterval(id)
      }
      increment += 0.01
      this.container.style.transform = `scale(${increment})`
      this.container.style.opacity = increment
    }

    this.animateKittyColor()
    const id = setInterval(showResults, 1)
    let increment = 0
  }

  animateKittyColor() {
    const colorArr = ['#f5f741', '#56ea46', '#e500ca', 'f95b00', '#b7165c']
    let arrIndex = 0

    setInterval(() => {
      if (arrIndex === colorArr.length - 1) {
        arrIndex = 0
      }
      this.kitty.style.fill = `${colorArr[arrIndex]}`
      arrIndex++
    }, 100)
  }

  render() {
    const { reset } = this.props

    return (
      <div className='winner'>
        <div className='winner-header'>
          <h2>YOU HAVE DEFEATED THE OCTOCAT!!!</h2>
        </div>
        <div className='btn' onClick={reset}>
          HOME
        </div>
        <div className='winner-header'>
          <h3>Thanks for Playing!</h3>
        </div>
        <div className='winner-kitty' ref={(gitKitty) => gitKitty ? this.kitty = gitKitty.children[0] : null}>
          <GithubKitty />
        </div>
      </div>
    )
  }
}

export default Winner
