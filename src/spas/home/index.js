import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import GithubKitty from './github.svg'
import './home.font'
import GamePage from './components/GamePage'
import GameInactivePage from './components/GameInactivePage'

class HomeSPA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameIsReady: false,
            gameIsOn: true
        };
      }
    
      render() {
        if(this.state.gameIsReady){
            return(
                <div className="spa-wrapper">
                    <GameInactivePage />    
                </div>
            );
        }
        if(this.state.gameIsOn){
            return(
                <div className="spa-wrapper">
                    <GamePage />    
                </div>
            );
            
        }
      }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))