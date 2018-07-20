import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import GithubKitty from './github.svg'
import Container from './container';
import Toolbar from './toolbar';
import './styles.scss'
import './home.font'

class HomeSPA extends Component {
    constructor(){
        super();
        this.state = {
            height: 0,
            width: 0,
            misses: 0,
            points: 0,
            gameOver: false,
            gameRunning: false,
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.setDimensions.bind(this));
        this.setDimensions();
    }

    setDimensions(){
        const {
            offsetHeight,
            offsetWidth
        } = this.gameContainer;
        this.setState({
            height: offsetHeight,
            width: offsetWidth,
        })
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.setDimensions.bind(this));
    }

    hit(){
        this.setState({
            points: this.state.points + 1,
        })
    }

    missed (){
        this.setState({
            misses: this.state.misses + 1,
        })
    }

    render(){
        const {
            misses,
            points,
            gameRunning,
            height,
            width,
        } = this.state;
        return (
            <div className="main" >
                <Toolbar 
                    maxPoints={10}
                    maxMisses={5}
                    misses={misses}
                    points={points} />
                <div
                    onClick={this.missed.bind(this)} 
                    className="gameContainer" 
                    ref={c => { this.gameContainer = c}} 
                    >
                    {gameRunning && <Container height={height}
                               className='svgContainer'
                               clicked={this.hit.bind(this)}
                               width={width} >
                        <GithubKitty />
                    </Container>}
                </div>
                <div className="overlay" />
            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('root'));