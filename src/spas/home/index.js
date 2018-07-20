import React, {Component} from 'react'
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
            missed: this.state.misses + 1,
        })
    }

    render(){
        return (
            <div className="main" >
                <Toolbar 
                    maxPoints={10}
                    maxMisses={5}
                    misses={this.state.misses}
                    points={this.state.points} />
                <div
                    onClick={this.missed.bind(this)} 
                    className="gameContainer" 
                    ref={c => { this.gameContainer = c}} 
                    >
                    <Container height={this.state.height}
                               className='svgContainer'
                               clicked={this.hit.bind(this)}
                               width={this.state.width} >
                        <GithubKitty />
                    </Container>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('root'));