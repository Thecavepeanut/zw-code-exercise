import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import './home.font'

import GameScreen from './components/GameScreen/index.js'
import HomeScreen from './components/HomeScreen'
import WinnerScreen from './components/WinnerScreen'
import LoserScreen from "./components/LoserScreen";
import AvatarScreen from './components/AvatarScreen'
import RulesScreen from './components/RulesScreen'


class HomeSPA extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: null,
            playerName: '',
        }

        this.switchScreens = this.switchScreens.bind(this)
    }
    
    switchScreens (screen, data = {}) {
        this.setState({ screen})
        this.setState(data)
    }


    render() {
        const {screen} = this.state

        switch(screen) {
            case 'Game':
                return (<GameScreen {...this.state} switchScreens={this.switchScreens} />);
            case 'Avatar':
                return (<AvatarScreen switchScreens={this.switchScreens}/>);
            case 'Winner':
                return (<WinnerScreen {...this.state} switchScreens={this.switchScreens}/>);
            case 'Looser':
                return (<LoserScreen  {...this.state} switchScreens={this.switchScreens}/>);
            case 'Rules':
                return (<RulesScreen switchScreens={this.switchScreens}/>);
            case 'Home':
            default:
                return (<HomeScreen switchScreens={this.switchScreens}/>)
        }
    
    }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))