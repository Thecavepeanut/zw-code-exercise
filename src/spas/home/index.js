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
            misses: 15,
            points: 10,
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



    render(){
        return (
            <div className="main" >
                <Toolbar 
                    misses={this.state.misses}
                    points={this.state.points} />
                <div 
                     className="gameContainer" 
                        ref={c => { this.gameContainer = c}} >
                    <Container height={this.state.height}
                               width={this.state.width} >
                        <GithubKitty  />
                    </Container>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('root'));