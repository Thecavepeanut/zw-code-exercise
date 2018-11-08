import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import GithubKitty from './github.svg'
import './home.font'

class HomeSPA extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        return (
          <div>
            <h1>Below is the clock</h1>
            <h2>Time now is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
}


ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))