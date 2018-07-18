import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import GithubKitty from './github.svg'
import Container from './container';
import './styles.scss'
import './home.font'

class HomeSPA extends Component {
    constructor(){
        super();
        this.state = {
            height: 0,
            width: 0,
        }
    }
    componentDidMount(){
        const {
            offsetHeight,
            offsetWidth
        } = this.gameContainer;
        this.setState({
            height: offsetHeight,
            width: offsetWidth,
        })
    }
    render(){
        return (
            <div className="main" >
                <span className="icon icon-beer"/>
                <div 
                     className="gameContainer" 
                        ref={c => { this.gameContainer = c}} >
                    <Container height={this.state.height}
                               width={this.state.width} >
                        <GithubKitty />
                    </Container>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('root'));