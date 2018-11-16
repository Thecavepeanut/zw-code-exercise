import React, { Component } from 'react'
import Ladybug from '../../assets/ladybug.svg'


export default class GameBoard extends Component {
    constructor() {
        super()
        this.state = {
            x: (window.innerWidth / 2),
            y: (window.innerHeight / 2),
        } 
        this.crawl = this.crawl.bind(this)
        this.crawlInterval = setInterval(() => this.crawl(), 1700)
  }

    crawl() {
        let x = Math.floor(Math.random() * (window.innerWidth + 70))
        let y = Math.floor(Math.random() * (window.innerHeight + 70))

        this.setState({ x, y})
    }

    componentDidUpdate({paused}) {
        if(this.props.paused !== paused) {
            if(this.props.paused) clearInterval(this.crawlInterval)
            else this.crawlInterval = setInterval(() => this.crawl(), 1700)
        } 
    }

    render() {
        return (
            <div className="game-board" 
                onClick={() => this.props.handleRandomClick()}
                >
                <div className="game-target wrapper" 
                    style={{ left: this.state.x, top: this.state.y}}
                    >

                    <Ladybug className="target-icon" 
                        onClick={() => this.props.handleClick()}
                        />
                </div>
            </div>
        )
  }

    componentWillUnmount() {
        clearInterval(this.crawlInterval)
    }
}
