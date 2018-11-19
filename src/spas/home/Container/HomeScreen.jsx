import React,{Component} from 'react';
import gameConfig from '../data/config.json';


class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
        this.messages = gameConfig.game.messages;
    }

    componentDidMount() {
      for (let i = 0; i <= this.messages.length; i++) {
          ((index) => {
          setTimeout(() => {
            this.setState({message: this.messages[index]}, () => {
              if(index === this.messages.length) {
                this.props.hideFirstGameScreen();
              }
            })
          }, i*1500);

        })(i);
    }

    }

    render() {
        return (
            <div className="welcome-winning-screen">
                <div className="welcome-winning-text">{this.state.message}</div>
            </div>
        );
    }
}

export default WelcomeScreen;
