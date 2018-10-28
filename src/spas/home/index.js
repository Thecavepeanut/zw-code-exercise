import React, {Component} from 'react'
import './styles.scss'
import './home.font'
import Square from './square.js'
import Clicks from './clicks.js'

export default class HomeSPA extends Component {
    constructor() {
        super();
        this.state = {
            score: 0
        }
        this.selectColor = this.selectColor.bind(this)
        this.generateSizeAndPosition = this.generateSizeAndPosition.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    selectColor() {
        const colors = ['ff6698', 'ffb366', 'ffff66', '98ff66', '6698ff']
        let color = `#${colors[Math.floor(Math.random() * colors.length)]}`
        this.setState({ color })
    }

    generateSizeAndPosition() {
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const squareWidth = Math.floor(windowWidth / 10) > 50 ? Math.floor(windowWidth / 10) : 50
        let posX = Math.floor(Math.random() * (windowWidth - squareWidth))
        let posY = Math.floor(Math.random() * (windowHeight - squareWidth))
        this.setState({ squareWidth, posX, posY })
    }

    handleClick() {
        // console.log(this.state.score)
        this.setState(prevState => {return {score: prevState.score + 1}})
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
                <Clicks score={this.state.score} />
                <Square
                    width={this.state.squareWidth} 
                    height={this.state.squareWidth} 
                    color={this.state.color} 
                    posX={this.state.posX} 
                    posY={this.state.posY} 
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}