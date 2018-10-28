import React, {Component} from 'react'
import './styles.scss'
import GithubKitty from './github.svg'
import './home.font'
import Square from './square.js'

export default class HomeSPA extends Component {
    constructor() {
        super();
        this.state = {}
        this.selectColor = this.selectColor.bind(this)
        this.generateSizeAndPosition = this.generateSizeAndPosition.bind(this)
    }

    selectColor() {
        const colors = ['ff6698', 'ffb366', 'ffff66', '98ff66', '6698ff']
        let color = `#${colors[Math.floor(Math.random() * colors.length)]}`
        this.setState({ color })
    }

    generateSizeAndPosition() {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const squareWidth = Math.floor(windowWidth/ 10) > 25 ? Math.floor(windowWidth/ 10) : 25
        let posX = Math.floor(Math.random() * (windowWidth- squareWidth))
        let posY = Math.floor(Math.random() * (windowHeight - squareWidth))
        this.setState({ squareWidth, posX, posY })
    }

    componentDidMount() {
        setInterval(() => {
            this.selectColor()
            this.generateSizeAndPosition()
        }, 1000)
    }

    render(){
        return (
            <div>
                <span className="icon icon-beer"/>
                <Square
                    width={this.state.squareWidth} 
                    height={this.state.squareWidth} 
                    color={this.state.color} 
                    posX={this.state.posX} 
                    posY={this.state.posY} 
                />
            </div>
        )
    }
}